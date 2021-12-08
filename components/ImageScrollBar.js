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

// Passing images from details page
const ImageScrollBar = ({ data }) => (
	<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
		{data.map((image) => {
			<Box key={image.id} width="910px" imageId={image.id} overflow="hidden" p="1">
				<Image
					placeholder="blur"
					blurDataUrl={image.url}
					src={image.url}
					height={500}
					width={1000}
					alt="property"
					sizes="(max-width:500px) 100px, (max-width: 1023px) 400px, 1000px"
				/>
			</Box>
		})}
	</ScrollMenu>
)

export default ImageScrollBar;