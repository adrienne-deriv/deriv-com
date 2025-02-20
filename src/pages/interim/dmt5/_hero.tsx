import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Section,
    ResponsiveHeader,
    ImgWrapper,
    ResponsiveFlex,
    FitButton,
    Desktop,
    Mobile,
} from '../_hero'
import CtaBinary from '../_cta-binary'
import { Container } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        dmt5: file(relativePath: { eq: "interim/interim-dmt5-bg.png" }) {
            ...fadeIn
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section bg="var(--color-black)" p="8rem 0">
                <Container fw="wrap">
                    <ResponsiveFlex fd="column" max_width="58.8rem" ai="center">
                        <ResponsiveHeader as="h2" type="page-title" mb="1.2rem" align="center">
                            <Localize translate_text="_t_Introducing MT5 on Deriv.com_t_" />
                        </ResponsiveHeader>
                        <Header
                            as="h4"
                            type="sub-section-title"
                            weight="normal"
                            mb="4rem"
                            align="center"
                        >
                            <Localize translate_text="_t_Trade on MT5 at our new home_t_" />
                        </Header>
                        <Desktop width="auto" fd="column" ai="center">
                            <FitButton secondary to="/">
                                <Localize translate_text="_t_Explore Deriv.com_t_" />
                            </FitButton>
                            <CtaBinary is_white />
                        </Desktop>
                    </ResponsiveFlex>
                    <ImgWrapper>
                        <QueryImage
                            width="100%"
                            data={data['dmt5']}
                            alt={localize('_t_DMT5 platforms_t_')}
                        />
                    </ImgWrapper>
                    <Mobile mt="4rem" fd="column" ai="center">
                        <FitButton secondary to="/">
                            <Localize translate_text="_t_Explore Deriv.com_t_" />
                        </FitButton>
                        <CtaBinary is_white />
                    </Mobile>
                </Container>
            </Section>
            <Container p="8rem 0" fd="column">
                <Header as="h4" type="sub-section-title" weight="normal" align="center">
                    <Localize translate_text="_t_In 2019, we celebrated our 20th year anniversary. Inspired by your love for online trading, we decided to create something new as part of our renewed commitment to making online trading effortless and accessible for you._t_" />
                </Header>
            </Container>
        </>
    )
}

export default Hero
