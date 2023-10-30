package com.suke.kensukesandbox.assets;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Person {

    private String name;

    private LocalDate memberCreatedAt; // メンバー登録日

    private MembershipCard card;

    public Person() {
    }

    public Person(String name, LocalDate memberCreatedAt, MembershipCard card) {
        this.name = name;
        this.memberCreatedAt = memberCreatedAt;
        this.card = card;
    }

    @Override
    public String toString() {
        return "Person [name=" + name + ", memberCreatedAt=" + memberCreatedAt + ", card=" + card + "]";
    }

}