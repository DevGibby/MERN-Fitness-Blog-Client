
// styled
import styled from 'styled-components';

//router
import { Link } from 'react-router-dom';

// images
import FB from '../images/FB.png';
import Insta from '../images/instaBlack.png';
import Pin from '../images/pinterestBlack.png';
import Twitter from '../images/twitterBlack.png';

export default function Footer() {
    return (
        <StyledFooter>
            <div className="iconContainer">
                <a href="https://facebook.com/therealdealfitness" target="_blank" rel="noreferrer">
                    <img src={FB} alt="" />
                </a>
                <a href="https://instagram.com/the_real_deal_fitness" target="_blank" rel="noreferrer">
                    <img src={Insta} alt="" />
                </a>
                <a href="https://pinterest.com/therealdealfitness" target="_blank" rel="noreferrer">
                    <img src={Pin} alt="" />
                </a>
                <a href="https://twitter.com/realdealfit21" target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="" />
                </a>
            </div>
            <div className="link-container">
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <a href="https://www.trdfitshop.com" target="_blank" rel="noreferrer">Merch</a>
                <Link to="">Terms of Service</Link>
                <Link to="">Policies</Link>
                <Link to="">Code of Conduct</Link>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
width: 95%;
margin: 2% auto;
display: flex;
justify-content: center;
align-items: center;
border-top: 2px solid white;
flex-direction: column;
.iconContainer {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin: 2% auto; 
    @media (max-width: 1050px){
       width: 30%;
    }
    @media (max-width: 750px){
       width: 50%;
    }
    a {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        &:hover {
            background: white;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.link-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 80%;
    @media (max-width: 1050px){
       grid-template-columns: 1fr 1fr 1fr;
       grid-row-gap: 20px;
       width: 50%;
    }
    a {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 12px;
        color: white;
        &:hover {
            text-decoration: underline;
        }
    }
}

`;
