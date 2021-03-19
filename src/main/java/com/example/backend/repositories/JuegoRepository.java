package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.models.Juego;

public interface JuegoRepository extends JpaRepository<Juego, Integer>
{

}