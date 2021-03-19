package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.Anime;
import com.example.backend.repositories.AnimeRepository;


@Service
public class AnimeService implements IAnimeService 
{
	
	@Autowired
	private AnimeRepository animeRepo;
	
	@Override
	public Anime create(Anime c) {
		return animeRepo.save(c);
	}

	@Override
	public Anime update(Anime c) {
		return animeRepo.save(c);	
	}

	@Override
	public Anime findById(Integer id) {
		Optional<Anime> animeOpcional = animeRepo.findById(id);	
		return animeOpcional.orElse(null);
	}

	@Override
	public List<Anime> findall() {
		return animeRepo.findAll();	
	}

	@Override
	public void delete(Integer id) {
		animeRepo.deleteById(id);	
		
	}

}