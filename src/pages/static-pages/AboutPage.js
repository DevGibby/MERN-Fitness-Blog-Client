// styled
import styled from 'styled-components';

export default function AboutPage () {
    return (
        <StyledAboutPage >
            <div className="about-wrapper">
                <h1>About Us</h1>
                <p><span id="bold">The Real Deal Fitness</span> was founded in 2021. Our goal is to bring real health and fitness tips, 
                clothing and accessories from mulitple diverse sources and opinions. The Real Deal Fitness is comprised of individuals 
                who are passionate about fitness and live the lifestyle.  We hope the information and products we provide server you and your healthy lifestyles!
                </p>
                <p>Thank you for visiting!- The Real Deal Fitness Team</p>
                <h1 id="bottomHeader">The Future..</h1>
                <p>The goal of this website is to bring a community feeling to the health and fitness world. Our websites are undergoing major development to
                bring a better and more engaging user experience!  Periodically you will find more and more features being added to the site. 
                </p><p>Thanks - The Real Deal Fitness Team</p>
            </div>
        </StyledAboutPage >
    )
}

const StyledAboutPage = styled.div`
    background: white;
    border-radius: 12px;
    width: 100%;
    min-height: 80vh;
    max-width: 875px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    @media (max-width: 750px){
        width: 95%;
    }
    .about-wrapper {
        width: 95%;
        margin: 20px auto;
        padding: 1em 0;
        h1 {
            margin: 10px 0;
            font-size: 2.5em;
            color: #3b3b3b;
        }
        #bottomHeader{
            margin-top: 1em;
        }
        p {
            font-size: 1.5em;
            span {
                font-weight: 700;
            }
        }
    }
`;