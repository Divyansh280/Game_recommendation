from flask import Flask, render_template, request
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
#loading csv file
data=pd.read_csv(r"C:\Users\ayush\Downloads\Game_Data.csv")
# Game recommendation data

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    
    tfidf = TfidfVectorizer(stop_words='english')
    data['combined_features'] = data['Genre'] + ' ' + data['Publisher']
    tfidf_matrix = tfidf.fit_transform(data['Genre'])

    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

    genre = request.form.get('genre')
    platform = request.form.get('platform')
    publisher = request.form.get('publisher')

    games = []
    book_index = data[(data['Genre'] == genre) & (data['Publisher'] == publisher)].index[0]
    similarity_scores = list(enumerate(cosine_sim[book_index]))
    sorted_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
    top_indices = [i[0] for i in sorted_scores[1:6]]  
    games = data['Name'].iloc[top_indices].tolist()
    
    return render_template('result.html', game=games)
    return render_template('error.html')

if __name__ == '__main__':
    app.run(debug=True)