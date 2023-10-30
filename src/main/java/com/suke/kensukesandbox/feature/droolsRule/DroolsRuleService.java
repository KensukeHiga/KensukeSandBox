package com.suke.kensukesandbox.feature.droolsRule;

import com.suke.kensukesandbox.assets.MembershipCard;
import com.suke.kensukesandbox.assets.Order;
import com.suke.kensukesandbox.assets.Person;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.drools.decisiontable.InputType;
import org.drools.decisiontable.SpreadsheetCompiler;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class DroolsRuleService {

    public DroolsResponse executeRules() throws IOException {
        // デフォルトの dateformat は "dd-MMM-yyyy" (例: "01-Apr-2019") なので変更する
        System.setProperty("drools.dateformat", "yyyy-MM-dd");

        KieServices ks = KieServices.Factory.get();

        System.out.println("=== デシジョンテーブルから生成される DRL ===");
        System.out.println("処理とは関係なく、ルールのコンパイルエラーなどを確認するため");
        SpreadsheetCompiler compiler = new SpreadsheetCompiler();
        String drl = compiler.compile(ks.getResources().newClassPathResource("drools/drools-excel.xlsx").getInputStream(), InputType.XLS);
        System.out.println(drl);
        System.out.println("======================================");

        KieContainer kcontainer = ks.getKieClasspathContainer();
        KieSession ksession = kcontainer.newKieSession();

        System.out.println();
        System.out.println("+++ ルール実行開始 +++");

        LocalDate memberRegisterDate = LocalDate.parse("2019-04-11");

        Person consumer = new Person("ジョン", memberRegisterDate, MembershipCard.SILVER);
        System.out.println("insert : " + consumer);
        ksession.insert(consumer);

        Order order = new Order(consumer, "ギター", 200000);
        System.out.println("insert : " + order);
        ksession.insert(order);

        int fired = ksession.fireAllRules();

        String message = "お買い上げにより、 " + order.getTotalPoint() + " ポイントが付与されます";

        System.out.println("======================================");
        System.out.println(message);
        System.out.println("======================================");

        ksession.dispose();

        DroolsResponse res = new DroolsResponse();
        res.setMessage(message);
        return res;
    }

    @Data
    public static class DroolsResponse {
        private String message;
    }
}
