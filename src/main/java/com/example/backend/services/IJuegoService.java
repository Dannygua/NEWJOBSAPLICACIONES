package com.example.backend.services;

import java.util.List;

import com.example.backend.models.Juego;

public interface IJuegoService 
{
	Juego create (Juego c);
	
	Juego update (Juego c);
	
	Juego findById (Integer id);
	
	List<Juego> findall ();
	
	void delete(Integer id);

}