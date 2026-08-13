from sklearn.feature_extraction.text import TfidfVectorizer
from preprocess import preprocess_text

def extract_keywords_tfidf(texts, top_k = 10,lang = "en", **kwargs):
    if isinstance(texts, str) :
        texts = [texts]

    cleaned_docs = []
    for text in texts:
        tokens = preprocess_text(text, lang=lang, **kwargs)
        cleaned_docs.append(" ".join(tokens))

    vectorizer = TfidfVectorizer(max_features=5000)
    tfidf_matrix = vectorizer.fit_transform(cleaned_docs)
    feature_names = vectorizer.get_feature_names_out()

    all_keywords = []
    for doc_idx in range(tfidf_matrix.shape[0]):
        row = tfidf_matrix[doc_idx].toarray().flatten()
        top_indices = row.argsort()[::-1][-top_k:]
        keywords = [(feature_names[i], round(row[i], 4)) for i in top_indices if row[i] > 0]
        all_keywords.append(keywords)

    if len(all_keywords) == 1:
        return all_keywords[0]
    return all_keywords


if __name__ == "__main__":
    sports_news = (
        "Lionel Messi scored a stunning hat-trick as Barcelona defeated "
        "Real Madrid 4-2 in a thrilling El Clasico at Camp Nou. The Argentine "
        "superstar opened the scoring in the 12th minute before adding two more "
        "goals in the second half. Karim Benzema netted a consolation brace for "
        "the visitors, but it was not enough to prevent Barcelona from securing "
        "a vital three points in the La Liga title race."
    )

    tech_news = (
        "Artificial intelligence and machine learning are transforming the tech "
        "industry. OpenAI has released GPT-4, a powerful large language model "
        "that can understand and generate human-like text. Google and Microsoft "
        "are also investing billions in AI research and development. Experts "
        "predict that AI will revolutionize healthcare, education, and finance "
        "in the coming decade."
    )

    docs = [sports_news, tech_news]

    keywords = extract_keywords_tfidf(sports_news, top_k=10, lang="en")
    for word, score in keywords:
        print(f"  {word:<20} {score:.4f}")

    keywords = extract_keywords_tfidf(tech_news, top_k=10, lang="en")
    for word, score in keywords:
        print(f"  {word:<20} {score:.4f}")

    print("多文档关键词（TF-IDF）")
    multi_keywords = extract_keywords_tfidf(docs, top_k=5, lang="en")
    for i, keywords in enumerate(multi_keywords):
        print(f"\n  文档 {i + 1}:")
        for word, score in keywords:
            print(f"    {word:<20} {score:.4f}")