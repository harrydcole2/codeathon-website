package com.redletterbookclub.red_letter_book_club;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration(exclude = {
		org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
})
public class RedLetterBookClubApplication {

	public static void main(String[] args) {
		SpringApplication.run(RedLetterBookClubApplication.class, args);
	}

}
