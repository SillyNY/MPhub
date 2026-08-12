import spacy

_NLP_EN = None
_NLP_ZH = None

def _get_nlp_en():
    global _NLP_EN
    if _NLP_EN is None:
        _NLP_EN = spacy.load("en_core_web_sm")
    return _NLP_EN

def _get_nlp_zh():
    global _NLP_ZH
    if _NLP_ZH is None:
        _NLP_ZH = spacy.load("zh_core_web_sm")
    return _NLP_ZH

def preprocess(text,lang = "en",
               remove_stopwords = True,
               remove_punct = True,
               remove_digits = True,
               lowercase = True,
               lemmatize = True):
    if lang.startswith("zh"):
        nlp = _get_nlp_zh()
    else:
        nlp = _get_nlp_en()

    doc = nlp(text)
    tokens = []

    for token in doc:
        if remove_punct and token.is_punct:
            continue
        if token.is_space:
            continue
        if remove_stopwords and token.is_stop:
            continue
        if remove_digits and token.is_digit:
            continue

        raw = token.text
        lemma = token.lemma_ if lemmatize else raw
        pos = token.pos_
        stop = token.is_stop

        final = lemma
        if lowercase and lang != "zh":
            final = final.lower()

        tokens.append({
            "raw": raw,
            "lemma": lemma,
            "pos": pos,
            "is_stop": stop,
            "output": final,
        })

    return tokens

def preprocess_text(text, lang = "en", **kwargs):
    tokens = preprocess(text,lang = lang, **kwargs)
    return [t["output"] for t in tokens]

def print_preprocess_report(text, lang="en"):
    tokens = preprocess(text, lang=lang)
    print(f"{'原始词':<20} {'词形还原':<20} {'词性':<10} {'停用词':<8} {'输出':<20}")
    print("-" * 80)
    for t in tokens:
        print(f"{t['raw']:<20} {t['lemma']:<20} {t['pos']:<10} "
              f"{str(t['is_stop']):<8} {t['output']:<20}")


if __name__ == "__main__":
    text_en = (
        "Apple is looking at buying a U.K. startup for $1 billion. "
        "The company's CEO, Tim Cook, announced the news yesterday in a press release."
    )

    text_zh = (
        "2024年11月，苹果公司正在考虑以10亿美元收购一家英国初创企业。"
        "公司首席执行官蒂姆·库克昨天在新闻稿中宣布了这一消息。"
    )

    print("=" * 60)
    print("英文预处理报告")
    print("=" * 60)
    print_preprocess_report(text_en, lang="en")

    print("\n" + "=" * 60)
    print("中文预处理报告")
    print("=" * 60)
    print_preprocess_report(text_zh, lang="zh")

    print("\n" + "=" * 60)
    print("清洗后的词序列（英文）")
    print("=" * 60)
    cleaned_en = preprocess_text(text_en, lang="en")
    print(cleaned_en)

    print("\n" + "=" * 60)
    print("清洗后的词序列（中文）")
    print("=" * 60)
    cleaned_zh = preprocess_text(text_zh, lang="zh")
    print(cleaned_zh)

