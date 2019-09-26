package com.com.backend.dto.response;

import lombok.*;
import org.springframework.lang.NonNull;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ResearchAbstractsDtoResponse extends AbstractsDtoResponse {

    @NonNull
    private String introdution;
    @NonNull
    private String aimOfTheStudy;
    @NonNull
    private String materialAndMethods;
    @NonNull
    private String results;
    @NonNull
    private String conclusions;

}