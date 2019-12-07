---
layout: page
permalink: /about/index.html
title: Kiwoong Yeom
tags: [Kiwoong, Yeom, Newhiwoong]
imagefeature: fourseasons.jpg
chart: true
---

<figure>
	<img src="{{ site.url }}/images/kywc.png" alt="자기소개서 워드클라우드">
	<figcaption>자기소개서 워드클라우드</figcaption>
</figure>

{% assign total_words = 0 %}
{% assign total_readtime = 0 %}
{% assign featuredcount = 0 %}
{% assign statuscount = 0 %}

{% for post in site.posts %}
    {% assign post_words = post.content | strip_html | number_of_words %}
    {% assign readtime = post_words | append: '.0' | divided_by:200 %}
    {% assign total_words = total_words | plus: post_words %}
    {% assign total_readtime = total_readtime | plus: readtime %}
    {% if post.featured %}
    {% assign featuredcount = featuredcount | plus: 1 %}
    {% endif %}
{% endfor %}

<!--
This is my personal blog. It currently has {{ site.posts | size }} posts in {{ site.categories | size }} categories which combinedly have {{ total_words }} words, which will take an average reader ({{ site.wpm }} WPM) approximately <span class="time">{{ total_readtime }}</span> minutes to read. {% if featuredcount != 0 %}There are <a href="{{ site.url }}/featured">{{ featuredcount }} featured posts</a>, you should definitely check those out.{% endif %} The most recent post is {% for post in site.posts limit:1 %}{% if post.description %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}">"{{ post.title }}"</a>{% else %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}" title="Read more about {{ post.title }}">"{{ post.title }}"</a>{% endif %}{% endfor %} which was published on {% for post in site.posts limit:1 %}{% assign modifiedtime = post.modified | date: "%Y%m%d" %}{% assign posttime = post.date | date: "%Y%m%d" %}<time datetime="{{ post.date | date_to_xmlschema }}" class="post-time">{{ post.date | date: "%d %b %Y" }}</time>{% if post.modified %}{% if modifiedtime != posttime %} and last modified on <time datetime="{{ post.modified | date: "%Y-%m-%d" }}" itemprop="dateModified">{{ post.modified | date: "%d %b %Y" }}</time>{% endif %}{% endif %}{% endfor %}. The last commit was on {{ site.time | date: "%A, %d %b %Y" }} at {{ site.time | date: "%I:%M %p" }} [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time "Temps Universel Coordonné").
-->

<h1 align="center">
<a href="https://docs.google.com/document/d/11DnFBrE_r5tCZuRxd2VIXdHpr0vsuCGY4hm9i-_SjJ4/edit?usp=sharing"> Kiwoong_Resume </a>  
</h1>

<figure>
  <img src="{{ site.url }}/images/kiwoong.jpg" alt="Kiwoong Yeom">
  <figcaption>Kiwoong Yeom</figcaption>
</figure>

## [INTRODUCTION]()

저의 목표는 모든 개인에게 맞춘 세상을 만드는 것입니다. 예를 들어 사람마다 소설이나 시 등의 글이나 여러 음악에는 어느 정도 양의 한계가 존재합니다. 자신이 좋아하는 작가의 글을 다 읽고 다음 글이 나올 때까지 몇 년 이상이 걸리는 경우도 있습니다. 우리는 같은 것을 계속해서 보는 것이 아닌 새로운 것을 보길 원합니다. 음악도 같습니다. 이는 작업 시간의 한계로 어쩔 수 없습니다. 이를 해결하기 위해 기존에 있는 글이나 음악을 DNN으로 사용자의 취향에 맞는 새로운 글이나 음악을 자체 생성을 해주며 더욱 개인화된 경험을 제공해주는 등 획일화된 서비스가 아닌 각각의 개인에게 맞춘 서비스를 제공하고 싶습니다.

## [EXPERIENCE]()
### 국민청원 분석으로 국민의 생각 알아보기  - *Team project*
<sub>2018.12.26 -, [Github](https://github.com/newhiwoong/National-Petition), [Report](https://bit.ly/2WevBAu)</sub>
- ‘국민청원 및 제안’ 데이터를 크롤링하여 371,229개의 청원을 기반으로 국민의 생각을 알아보는 프로젝트로 비교적 쉽게 국민들이 생각하는 문제들을 알 수 있는 보고서 작성
- 비슷한 청원 글들을 Topic으로 모아서 분석하는 작업, 국민청원과 문재인 대통령의 지지율 간의 상관관계 분석 등을 진행 중 

### 서울에서 갈만한 장소 추천 사이트 제작 - *Team project*
<sub>2018.10.07 - 12.20, [Github](https://github.com/newhiwoong/Sejong_ITIP-), [Report](https://bit.ly/2S8pMFr)</sub>
- ‘어디를 갈까?’에 대해 고민하는 사람들을 위해 기상 사항과 사용자가 바라는 장소로 필터링을 한 후 최대한 가까운 ‘서울 내의 갈만한 장소’를 추천
- 기상청 API 받기, 추천 알고리즘 제작, 웹 개발, 업무 지도 등 모든 부분 총괄

### 다용도 Word Cloud - *Personal Project*
<sub>2018.12, [Github](https://github.com/newhiwoong/Multipurpose_Word_Cloud) [Image](https://newhiwoong.github.io/images/kywc.png), [Post](https://newhiwoong.github.io/nlp/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%8C%80%ED%99%94-%EB%82%B4%EC%9A%A9%EC%9D%84-Word-Cloud%EB%A1%9C-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0)</sub>
- 자기소개서, 카카오톡 대화 등 한글로 된 글을 KoNLPy로 키워드 추출 후 자신이 원하는 형태의 모습으로 Word Cloud 제작

### 세종대 창취업 사이트 개발 - *Hackathon*
<sub>2018.06.26 - 27</sub>
- 취업을 바라는 학생의 이력서, 회사의 채용공고, 투자를 받고 싶은 자신의 창업 아이템 올려 이를 검색 및 추천할 수 있는 사이트 제작하여 해커톤 은상 수상
- 크라우드펀딩 사이트 Code를 우리의 사이트 폼으로 바꾸는 작업, 이력서를 KoNLPy를 이용하여 요약하는 작업, 사용자 추천 내용을 DB에 저장하는 작업 수행

### 정치인 호감도 분석 - *Team project*
<sub>2017.09.11 - 12, [Github](https://github.com/newhiwoong/Reputation_analysis), [Slide](https://docs.google.com/presentation/d/1BZeOyKfBZ5twIbe4492BwODVQThn-bhGxxbDZk_WMcs/edit#slide=id.g1ff355a957_0_10)</sub>
- 트위터 긍부정 단어로 크롤링한 정치인 뉴스 기사의 긍부정 빈도로 정치인의 호감도 분석  

### 유전 알고리즘을 이용한 공항 철도 속도 최적화, *G-TSC - Team project*
<sub>2017.08.24 - 09.02, [Github](https://github.com/newhiwoong/GeneticAlgorithm-TSC)</sub>
- 유전 알고리즘으로 속도를 조절해 열차가 환승 시간에 맞게 도착하게 하는 시뮬레이션 진행 
- 유전 알고리즘 부분 진행(1800 세대 후 성능이 약 4배 상승)

### 타자 연구 프로그램 제작, *STAR - Personal Project*
<sub>2017.05.18 - 06.02, [Github](https://github.com/newhiwoong/STAR)</sub>
- 타자의 속도와 타이핑 대상을 분석해 부족한 부분을 집중해서 연습하게 하는 프로그램

### (유) 아키텍트그룹 근무  - *Company, Solutions Engineer*
<sub>2016.08.22 - 2017.02.17</sub>
- Si 업체 기술팀에 근무해 각종 제품의 이슈 해결, 문서 및 스크립트 제작, 회사 홈페이지의 상단의 각종 제품 소개 Page 제작 작업 등 업무 진행
- LG팀에서 기존에 사용하던 IBM ALM Tool의 모든 내용을 codeBeamer로 마이그레이션 작업 진행. 기존 item들을 codeBeamer의 format으로 바꾸는 Excel 스크립트 제작으로 기존보다 2배이상의 빠른 업무 진행이 가능해짐 
- Seafile 제품 총괄로 삼성 및 다양한 기업의 이슈 해결

### 환율 계산기 제작, CRP  - *Personal Project*
<sub>2016.05.13 - 15, [Github](https://github.com/newhiwoong/CRP)</sub>
- API를 이용한 환율 환산 및 메모 기능을 추가한 계산기 제작

### 버스 냉 난 방 조절 시스템 구현 및 민원 신청  - *Team Project*
<sub>2016.01.05 - 03.25</sub>
- 센서로 데이터를 얻어 온도를 조절하는 모의 환경을 구축                 
- 서울시 응답소에 민원 신청 (기획, 디자인, 라즈베리파이)

### OS 제작 스터디, MINT64OS  - *Study ,Personal Project*
<sub>2015.12.30 - 2016.02.28, [Github](https://github.com/newhiwoong/MINT64OS)</sub>                
- OS 개발 환경 구축 및 각종 운영 모드, 레지스터 등을 학습 후 부드로드 제작 및 보호 모드 전환까지 진행

### 나쁜녀석들 팬 페이지 제작  - *Team Project*
<sub>2014.11, [Github](https://github.com/newhiwoong/bad-guys)</sub>
- 동아리 부원들과 좋아하는 드라마의 팬페이지 제작 (프론트엔드 부분, DB 연동)


## [EDUCATION]()
### 세종대학교 - *데이터사이언스학과*
<sub>2018.03.01 -</sub>  
학부 1학년 때 4학년 수업 지능형 시스템과 대학원 수업 기계학습특론에서 우수한 성적을 받으며 인공지능 분야 학습 또한 현재 학부 연구생으로 다양한 프로젝트를 진행 중

### 서울대학교 빅데이터 아카데미 - *Big Data Engineer 과정*
<sub>2017.08.21 - 2017.09.15</sub>  
서울대 교수님들에게 Hadoop / Spark, 추천시스템, 기계 학습, 텍스트 분석, 고급 Python, 딥러닝, 웹 애널리틱스 이론을 배운 후 실습 및 프로젝트 진행 후 수강생 대표로 선정됨

### 한세사이버보안고등학교 - *해킹보안과*
<sub>2014.03.01 - 2017.02.10</sub>  
프로그래밍, 컴퓨터 구조, 알고리즘, 네트워크, 정보보안 등의 과목을 이수 및 네트워크 보안 동아리 활동 수행. 정보처리기능사, 리눅스마스터, 네트워크관리사 등 기본적인 자격증 취득

## [Skills]()

### Language
Python, JavaScript, C

### Framework
Pandas, NumPy, scikit-learn, KoNLPy, Spark, [PyTorch](https://github.com/newhiwoong/PyTorch), [TensorFlow](https://github.com/newhiwoong/TensorFlow), [Keras](https://github.com/newhiwoong/Keras-Applications)

### AI / ML
오일석의 '[패턴인식](http://www.yes24.com/24/goods/3315437?scode=032&OzSrank=1)', 마이클 네그네빗스키의 ‘[인공지능 개론](http://www.yes24.com/24/Goods/9386454?Acode=101)’ 독학으로 전통적인 ML 분야 학습, Vision + NLP + Sequence Models - [Coursera 강의](https://www.coursera.org/learn/nlp-sequence-models) 수료 및 각종 프로젝트 진행, [강화학습](https://event-us.kr/modu/event/2016) + [Deep Generative](https://event-us.kr/modu/event/4648) 스터디를 통하여 학습 및 실습


<h2>Connect</h2>
✉️ [newhiwoong@gmail.com]()  
🌐 [https://github.com/newhiwoong](https://github.com/newhiwoong)
