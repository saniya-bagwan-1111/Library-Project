package com.library.sprint_boot_library.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.library.sprint_boot_library.entity.Book;

@CrossOrigin("http://localhost:3000")//react app port required 
public interface BookRepository extends JpaRepository<Book, Long> {

}
