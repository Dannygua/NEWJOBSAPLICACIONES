package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.models.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, Integer>
{

}