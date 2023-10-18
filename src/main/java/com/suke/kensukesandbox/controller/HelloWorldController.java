package com.suke.kensukesandbox.controller;

import com.suke.kensukesandbox.feature.kogitoRule.KogitoRuleApiService;
import com.suke.kensukesandbox.feature.kogitoRule.KogitoRuleApiService.KogitoResponse;
import com.suke.kensukesandbox.feature.kogitoRule.KogitoRuleApiService.LoyaltyIn;
import com.suke.kensukesandbox.feature.kogitoRule.KogitoRuleApiService.LoyaltyRequest;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/todos")
public class HelloWorldController {
    private final KogitoRuleApiService kogitoRuleApiService;
    @PostMapping
    public KogitoResponse postTodo(
            @RequestBody TodoFromRequest formReq
    ) {
        LoyaltyRequest request = new LoyaltyRequest();
        LoyaltyIn loyalty = new LoyaltyIn();
        loyalty.setRank(formReq.getName());
        request.setLoyalty(loyalty);
KogitoResponse res = kogitoRuleApiService.callKogitoService(request);
        return res;
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
