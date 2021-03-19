package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.Juego;
import com.example.backend.repositories.JuegoRepository;


@Service
public class JuegoService implements IJuegoService 
{
	
	@Autowired
	private JuegoRepository juegoRepo;
	
	@Override
	public Juego create(Juego c) {
		return juegoRepo.save(c);
	}

	@Override
	public Juego update(Juego c) {
		return juegoRepo.save(c);	
	}

	@Override
	public Juego findById(Integer id) {
		Optional<Juego> juegoOpcional = juegoRepo.findById(id);	
		return juegoOpcional.orElse(null);
	}

	@Override
	public List<Juego> findall() {
		return juegoRepo.findAll();	
	}

	@Override
	public void delete(Integer id) {
		juegoRepo.deleteById(id);	
		
	}

}