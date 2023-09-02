import './home.scss'
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import datas from '../../data/data.json';
import Card from '../../components/card/Card';


export function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default function Home() {

	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
