import { useState } from "react";
import ShortenedUrl from "./ShortenedUrl";

export default function UrlShortener({ urls, removeUrl, setUrls }) {

      const [urlFormData, setUrlFormData] = useState({ originalUrl: '' });
        const encodeBase36 = () => Math.random().toString(36).substring(2, 8);


  const shortenUrl = () => {
    const code = encodeBase36();
    const originalUrl = urlFormData.originalUrl;
    const shortenedUrl = `https://short.ly/${code}`;
    setUrls([...urls, { key: code, originalUrl, shortenedUrl }]);
  }


  return (
         <div className="url-shortener-container">
        <div className="url-shortener-header">URL Shortener</div>
        <input type="url" onChange={(e) => setUrlFormData({ ...urlFormData, originalUrl: e.target.value })} placeholder="Enter URL to shorten" />
        <button onClick={() => shortenUrl()}>Shorten URL</button>
        <div className="shortened-urls-list">
          <h2>Shortened URLs</h2>
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Original URL</th>
                <th>Shortened URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, index) => (
                <ShortenedUrl key={index} code={url.key} originalUrl={url.originalUrl} shortenedUrl={url.shortenedUrl} onRemove={removeUrl} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}