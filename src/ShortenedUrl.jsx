export default function ShortenedUrl({ code, originalUrl, shortenedUrl, onRemove }) {
    return (
        <tr>
            <td>{code}</td>
            <td>{originalUrl}</td>
            <td>{shortenedUrl}</td>
            <td><button onClick={() => onRemove(code)}>Remove</button></td>
        </tr>
    );
}