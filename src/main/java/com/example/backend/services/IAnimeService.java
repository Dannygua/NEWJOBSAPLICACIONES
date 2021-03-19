package com.example.backend.services;

import java.util.List;

import com.example.backend.models.Anime;

public interface IAnimeService 
{
	Anime create (Anime c);
	
	Anime update (Anime c);
	
	Anime findById (Integer id);
	
	List<Anime> findall ();
	
	void delete(Integer id);

}