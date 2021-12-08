import { useContext } from 'react';
import Image from 'next/images';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
	//Coming from the react-horizontal-scrolling menu.
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon
				as={FaArrowAltCircleLeft}
				onClick={scrollPrev}
				fontSize="2xl"
				cursos="pointer"
			/>
		</Flex>

	)
}
const RightArrow = () => {
	//Coming from the react-horizontal-scrolling menu.
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon
				as={FaArrowAltCircleRight}
				onClick={scrollNext}
				fontSize="2xl"
				cursos="pointer"
			/>
		</Flex>

	)
}


const ImageScrollBar = () => (
	<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>

	</ScrollMenu>
)