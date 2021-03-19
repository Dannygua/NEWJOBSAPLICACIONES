package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.Pelicula;
import com.example.backend.repositories.PeliculaRepository;


@Service
public class PeliculaService implements IPeliculaService 
{
	
	@Autowired
	private PeliculaRepository peliculaRepo;
	
	@Override
	public Pelicula create(Pelicula c) {
		return peliculaRepo.save(c);
	}

	@Override
	public Pelicula update(Pelicula c) {
		return peliculaRepo.save(c);	
	}

	@Override
	public Pelicula findById(Integer id) {
		Optional<Pelicula> peliculaOpcional = peliculaRepo.findById(id);	
		return peliculaOpcional.orElse(null);
	}

	@Override
	public List<Pelicula> findall() {
		return peliculaRepo.findAll();	
	}

	@Override
	public void delete(Integer id) {
		peliculaRepo.deleteById(id);	
		
	}

}