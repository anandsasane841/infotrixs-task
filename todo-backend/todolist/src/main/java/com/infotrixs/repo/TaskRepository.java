package com.infotrixs.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.infotrixs.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
