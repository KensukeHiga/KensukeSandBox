package com.suke.kensukesandbox.controller;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/todos")
public class HelloWorldController {
    @PostMapping
    public String postTodo(
            @RequestBody TodoFromRequest req
    ) {

        return "TOMATO";
    }

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello, world";
    }


    @Data
    public static class TodoFromRequest {
        private String name;
        private String content;
    }
}
