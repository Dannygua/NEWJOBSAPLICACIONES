package com.example.backend.services;

import java.util.List;

import com.example.backend.models.Pelicula;

public interface IPeliculaService 
{
	Pelicula create (Pelicula c);
	
	Pelicula update (Pelicula c);
	
	Pelicula findById (Integer id);
	
	List<Pelicula> findall ();
	
	void delete(Integer id);

}