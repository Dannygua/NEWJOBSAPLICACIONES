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
import com.example.backend.models.Juego;
import com.example.backend.services.JuegoService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/juegos")
public class JuegoController {
	
	@Autowired
	private JuegoService juegoservice;

	@GetMapping
	public List<Juego> findAll(){
		return juegoservice.findall();
	}
	
	@PostMapping
	public Juego create ( @RequestBody Juego c) {
		return juegoservice.create(c);
	}
	
	
		
	@GetMapping("/{id}")
	public  Juego findById (@PathVariable("id") Integer id) {
		return juegoservice.findById(id);
	}
	
	
	@PutMapping ("/{id}")
	public Juego update ( @RequestBody Juego c, @PathVariable("id") Integer id) {
		c.setIdJuego(id);
		return juegoservice.update(c);
	}
	
	
	
	@DeleteMapping ("/{IdJuego}")
	public void delete (@PathVariable("IdJuego") Integer IdJuego) {
		juegoservice.delete(IdJuego);
	}
	

}