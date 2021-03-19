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
import com.example.backend.models.Pelicula;
import com.example.backend.services.PeliculaService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/peliculas")
public class PeliculaController {
	
	@Autowired
	private PeliculaService peliculaservice;

	@GetMapping
	public List<Pelicula> findAll(){
		return peliculaservice.findall();
	}
	
	@PostMapping
	public Pelicula create ( @RequestBody Pelicula c) {
		return peliculaservice.create(c);
	}
	
	
		
	@GetMapping("/{id}")
	public  Pelicula findById (@PathVariable("id") Integer id) {
		return peliculaservice.findById(id);
	}
	
	
	@PutMapping ("/{id}")
	public Pelicula update ( @RequestBody Pelicula c, @PathVariable("id") Integer id) {
		c.setIdPelicula(id);
		return peliculaservice.update(c);
	}
	
	
	
	@DeleteMapping ("/{IdPelicula}")
	public void delete (@PathVariable("IdPelicula") Integer IdPelicula) {
		peliculaservice.delete(IdPelicula);
	}
	

}