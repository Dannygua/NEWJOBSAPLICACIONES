package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.models.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Integer>
{

}