package com.suke.kensukesandbox.feature.kogitoRule;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class KogitoRuleApiService {
    private final RestTemplate restTemplate;
    private final String kogitoServiceUrl = "http://localhost:8090/CustomerLoyalty";

    /**
     * Kogitoサービスにリクエストを送信する
     * TODO:可変になる型をジェネリクスにして共通利用できるようにする。
     * @param requestPayload API先で受け取るクラス
     * @return API先で返却するクラス
     */
    public KogitoResponse callKogitoService(LoyaltyRequest requestPayload) {
        // ヘッダーを設定
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        // リクエストボディとヘッダーを含むリクエストエンティティを作成
        HttpEntity<Object> requestEntity = new HttpEntity<>(requestPayload, headers);

        // KogitoサービスにPOSTリクエストを送信
        ResponseEntity<KogitoResponse> response = restTemplate.exchange(
                kogitoServiceUrl,
                HttpMethod.POST,
                requestEntity,
                KogitoResponse.class
        );

        // レスポンスボディを返す
        return response.getBody();
    }

    @Data
    public static class LoyaltyRequest {
        private LoyaltyIn loyalty;
    }


    @Data
    public static class KogitoResponse {
        private LoyaltyOut decisionLoyalty;
        private LoyaltyIn loyalty;
    }

    @Data
    public static class LoyaltyOut {
        private BigDecimal discountRate;
        private String message;
    }

    @Data
    public static class LoyaltyIn {
        private String rank;
    }

}
