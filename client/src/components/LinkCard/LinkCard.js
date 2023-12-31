export const LinkCard = ({link}) => {

    return (
        <>
            <h1>Ссылка</h1>
            <p>
                Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
            </p>
            <p>
                Откуда ссылка: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
            </p>
            <p>
                Количество кликов по ссылке: <strong>{link.clicks}</strong>
            </p>
            <p>
                Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    );
};
