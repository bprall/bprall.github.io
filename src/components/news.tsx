type NewsItem = {
  title: string;
  date: string;
};

function renderNewsItems(item: NewsItem) {
  return (
    <div className="news-row">
      <div className="news-title">{item.title}</div>
      <div className="news-date">{item.date}</div>
    </div>
  );
}

type NewsProps = {
  news: NewsItem[];
};

export default function RenderNews({ news }: NewsProps) {
  return (
    <section id="news">
      <h2>News</h2>
      <div className="search">
        <input type="search" name="news" placeholder="Search News..." />
      </div>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index}>{renderNewsItems(item)}</div>
        ))}
      </div>
    </section>
  );
}