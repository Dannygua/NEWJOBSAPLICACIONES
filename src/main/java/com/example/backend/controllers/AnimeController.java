package com.example.backend.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.models.Anime;
import com.example.backend.services.AnimeService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/animes")
public class AnimeController {
	
	@Autowired
	private AnimeService animeservice;

	@GetMapping
	public List<Anime> findAll(){
		return animeservice.findall();
	}
	
	@PostMapping
	public Anime create ( @RequestBody Anime c) {
		return animeservice.create(c);
	}
	
	
		
	@GetMapping("/{id}")
	public  Anime findById (@PathVariable("id") Integer id) {
		return animeservice.findById(id);
	}
	
	
	@PutMapping ("/{id}")
	public Anime update ( @RequestBody Anime c, @PathVariable("id") Integer id) {
		c.setIdAnime(id);
		return animeservice.update(c);
	}
	
	
	
	@DeleteMapping ("/{IdAnime}")
	public void delete (@PathVariable("IdAnime") Integer IdAnime) {
		animeservice.delete(IdAnime);
	}
	

}