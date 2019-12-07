---
layout: post
title: "Effective Approaches to Attention-based Neural Machine Translation 논문 리뷰"
description: 
headline: 
modified: 2019-03-08
category: 논문 리뷰
imagefeature: cover3.jpg
tags: [논문 리뷰, attention, neural machine translation]
mathjax: 
chart: 
share: true
comments: true
---

attention 기법을 처음 적용하여 긴 문장의 NMT(Neural machine translation)에서 성능을 향상시킨 [NEURAL MACHINE TRANSLATION BY JOINTLY LEARNING TO ALIGN AND TRANSLATE](https://arxiv.org/pdf/1508.04025.pdf)을 리뷰를 해보겠다. 

![]({{ site.url }}/images/Effective_Approaches_to_Attention-based_Neural_Machine_Translation1.JPG)  
`WMT` 그리고 비슷한 시대에 나온 `Jeans et al.` 논문에서 나온 `BLEU Score`보다 훨씬 좋은 성능을 보여 `State of Arts`를 달성했다.

[논문](https://arxiv.org/pdf/1508.04025.pdf)를 참고하자.

## ABSTRACT, Introduction 요약

`attentional` 메커니즘은 최근 `Neural machine translation` 이하 `NMT`을 개선하는데 사용되었다. 그러나 `attentional`기반 `NMT`에서 유용한 구조를 탐구하는 작업은 거의 없었다. 본 논문은 모든 것을 확인하는 `global approach`과 일부만 보는 `local approach`라는 두 가지 `attentional` 메커니즘의 간단하고 효과적인 분류를 연구한다.



최근에 제안된 모델들은 `encoder–decoder`구조에 속한다. `encoder–decoder`방법은 `encoder neural network`로 소스 문장을 `fixed-length vector`로 인코딩 한다. 그런 다음 디코더는 인코딩된 `fixed-length vector`을 통해서 번역을 진행한다. 상식적으로 작은 `fixed-length vector` 하나로는 소스 문장이 길면 길수록 문장의 정보를 담기 힘들것이다. 실제로 입력 문장의 길이가 증가함에 따라 `encoder–decoder`의 성능이 급속히 저하된다.


이 문제를 해결하기 위해 모델이 자동으로 `Soft-alignments` 이하 `attention`작업을 진행한다.

### Soft-alignment(attention) VS Hard-alignment
- `Soft-alignment(attention)` : 영어 -> 한글 번역으로 예를 들자면 'I'가 '나'라는 정보를 컴퓨터 스스로 학습하는 것이다.
- `Hard-alignment` : 예를 들면 위에 'I'가 '나'라는 정보를 사람이 직접 입력하는 것이다.

이 접근법의 가장 중요한 특징 중 하나는 전체 입력 문장을 하나의 `fixed-length vector`로 인코딩하려고 시도하지 않는다는 것이다. 대신에, 디코딩을 진행할 때마다 번역된 단어가 위와 같이 관련된 문장을 찾는다. 우리는 이 방법으로 모델이 긴 문장에 더 잘 대처할 수 있게 한다는 것을 보여준다.


## 3 LEARNING TO ALIGN AND TRANSLATE
이 절에서 이 논문에 모델을 이야기한다. 인코더에서 `양방향 RNN`을 사용한다. 따라서 번역을 할 때 이전에 나온 단어 뿐만 아니라 다음에 나올 단어들까지 보면서 정확도를 높이겠다는 의미를 가진다. 디코딩 과정에서 위에서 설명한 `attention`을 통해 번역할 문장에 해당하는 소스문장을 찾는다. 아래 그림으로 전체구조를 볼 수 있다.

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE2.JPG)  

### 3.1 DECODER: GENERAL DESCRIPTION
이 구조에서 새로운 조건부 확률을 정의한다.

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE3.JPG)  

`si`는 시간 `i`에 대한 `RNN`의 `hidden state`로 다음과 같이 계산된다.

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE4.JPG)  

이 식은 `RNN 과정`을 통해서 이전에 나온 것들과 `ci`부분을 통해서 다음번 단어를 생성한다는 의미이다.  
여기서 주목할만한 점은 `ci` 부분이다. 나머지 부분은 일반적인 `RNN` 구조를 가지지만 `ci`는 `attention` 과정을 의미한다. 계산 방법은 다음과 같다.

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE5.JPG)  

`ci`는 `hj`와 `알파`의 곱으로 쓰인다. `hj`는 입력 시퀀스의 `j` 번째 단어라고 생각하면 된다. 

`알파`를 계산하는 방법은 다음과 같다. 

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE6.JPG)  

`알파`는 소프트맥스를 통해 `eij`에 대한 확률값을 가진다. 
`e`값은 다음과 같이 계산한다. `a`함수는 `alignment model`로 특정 j번째 입력 `hidden starte`와 직전에 만들어낸 단어의 `hidden starte` 사이의 관계값이다. 

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE7.JPG)  

`a`함수를 풀어쓰면 위와 같은 식이 된다. 출력 네트워크의 `hidden starte`와 인코더 네트워크의 `hidden starte`를 합치고 `tanh`를 진행한다. 즉 이것도 하나의 `뉴런네트워크`이다. `Vhj`는 이미 계산된 값이며 `Wsi-1` 값만 계속해서 계산하면 된다.

여기서 `i`는 변수로 출력하는 `word`의 `index`를 나타낸다. 즉 `word`를 만들 때마다 새롭게 계산된다. 그러므로 긴 문장이어도 `attention` 기법을 통해서 `attention` 기법을 사용하지 않는 방식보다 훨씬 높은 정확도를 가진다.

### 3.2 ENCODER: BIDIRECTIONAL RNN FOR ANNOTATING SEQUENCES
`일반 RNN`은 `input sequence x`를 순방향으로만 계산한다. 번역 등을 할때는 이전 단어뿐만 아니라 다음 단어도 학습하길 원한다. 그래서 역방향까지 학습하는 `양방향 RNN`을 사용한다. 그리고 최근 음성 인식 쪽에서도 성공적으로 적용되었다고 한다. 참고 [(see, e.g., Graves et al., 2013).](https://arxiv.org/pdf/1308.0850.pdf)

`양방향 RNN`은 순방향과 역방향 2개의 `RNN`으로 구성된다. 순방향은 `1,2,3,...,T` 까지 역방향은 `T,....,2,1`로 계산한다. 

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE8.JPG)  

그리고 순방향과 역방향을 `concatenating`하여 `hj`를 구한다.

이 방법을 통해서 `hj`는 `j`번째 단어 앞뒤의 정보를 모두 알 수 있게 된다.

## 4 EXPERIMENT SETTINGS

대표적으로 `English-French`번역을 가지고 테스트를 했다. `348M`개의 데이터로 테스트를 했다.

`Hidden units`를 1000개로 계산한다. 그런데 이 모델을 `양방향 RNN`으로 순방향 1000개 역방향 1000개로 `일반 RNN`보다 좀 더 많은 `Hidden units`를 가지고 있다. 

`SGD`와 `Adadelta`를 사용했다. 각 `SGD` 업데이트 방향은 `80 sentences`의 `minibatch`를 사용하여 계산했다.

### 성능

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE1.JPG)  

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE9.JPG)  

처음에 보여준 그림과 같이 `RNNsearch`가 해당 모델이고, `RNNenc`가 이전 모델이다. 큰 성능 향상을 보였고 문장의 길이가 길어져도 급감하는 현상이 적어졌다. 그리고 트레이닝을 `50개`짜리로 더 많이 했을 때 더 높은 성능을 보여준다. `*`이 붙은 게 매우 오랫동안 학습을 한 경우인데, `No UNK` 즉 모르는 단어를 제외하면 `open source smt`로 유명한 `Moses`보다 높은 성능을 보여준다. 간단한 모델을 통해서 `Moses`보다 높은 성능을 발휘하는 것은 대단한 성과이다.

## 5 RESULTS

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE10.JPG)  

위 그림은 `x축`으로 `입력 sentences`, `y축`으로는 `출력 sentences`를 차례대로 썼고 각 네모의 밝기가 `알파` 값이다. 즉 밝을수록 관련이 높은 것이다. 불어와 는 일반적으로 어순이 비슷하여 무난하게 가기도 하지만 어떨 때는 어순이 거꾸로 일 때도 있다. 그리고 여러 정관사도 `1:n`으로 있을 수도 있는데 이럴 때도 `attention`이 해당하는 부분을 잘 처리하는 것을 그림을 통해 볼 수 있다.

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE11.JPG)  

일반적인 `seq2seq`모델의 문제점인 초반에는 번역이 잘 됐다가 문장이 길어지면 해석이 잘 안 되는 경향이 있는데 `attention`을 적용하여 긴 문장도 해석이 잘 된다고 한다. 

![]({{ site.url }}/images/NEURAL_MACHINE_TRANSLATION_BY_JOINTLY_LEARNING_TO_ALIGN_AND_TRANSLATE12.JPG)  
(구글 번역기를 돌려보니 뭔가 잘 되는 거 같다.)
