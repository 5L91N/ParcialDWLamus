package main.java.com.ParcialDW.devconf.repository;

import com.tuproyecto.model.Receta;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecetaRepository extends MongoRepository<Receta, String> {
   
}