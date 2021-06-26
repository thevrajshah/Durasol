import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Logo />
				<Text>© 2021 Vraj Shah. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'YouTube'} href={'#'}>
						<FaYoutube />
					</SocialButton>
					<SocialButton label={'Instagram'} href={'#'}>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}

const Logo = () => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="36" height="36" rx="5" fill="#669DB3" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.6687 19.1453L12.6475 13.0509L19.3901 9.62936V16.6087L18.5896 16.3238V10.9642L13.4465 13.5741L13.466 19.1453H12.6687Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.5911 16.6993V6.38583L23.322 10.412V18.6276H22.5215V10.8971L17.3915 7.82853V16.3669L16.5911 16.6993Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.3931 17.6558L8.07493 22.423L7.72472 21.6737L17.3931 16.7273V17.6558Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18.5896 16.6704L28.2785 21.672L27.9252 22.4213L18.5896 17.6022V16.6704Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M27.9253 24.4936L18.0016 19.3155L8.07797 24.4936L7.72157 23.7443L18.0016 18.3803L28.2817 23.7443L27.9253 24.4936Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.01207 16.4709C3.00487 16.6492 3 16.828 3 17.0079C3 24.7355 9.71573 31 18 31C26.2843 31 33 24.7355 33 17.0079C33 16.828 32.9952 16.6492 32.9879 16.4709C32.6852 23.9496 26.0914 29.926 18 29.926C9.90862 29.926 3.31477 23.9496 3.01207 16.4709Z"
				fill="#202926"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M19.8129 28.4124L16.8525 28.4185L16.8497 22.0763L19.7859 22.0711L19.9628 22.2195L19.9605 27.9811C19.9602 28.319 20.0187 28.2083 19.8129 28.4124V28.4124ZM16.832 21.5615C16.706 21.7437 16.6568 21.5842 16.6411 21.5615C16.6832 21.5462 16.6865 21.5084 16.832 21.5615ZM15.5683 22.0636L16.0164 22.0738C16.097 22.3391 16.0387 23.3079 16.0408 23.6463C16.0497 25.0584 16.1018 27.1269 16.0342 28.4156L15.5514 28.4262L15.2272 29.031L20.0609 29.045C20.2145 28.8812 20.4693 28.7177 20.6535 28.5774C20.8483 28.4289 20.7524 27.9324 20.7528 27.6833L20.7525 23.911C20.7531 23.2909 20.7849 22.5979 20.7402 21.9867L20.0595 21.4698L15.2289 21.4655C15.2696 21.603 15.4562 21.9375 15.5683 22.0636H15.5683Z"
				fill="#EE4645"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.2718 25.6548L17.2554 28.1069L19.489 28.1113L19.4813 25.3615C19.3826 25.2913 18.2285 24.8144 18.0522 24.7743L18.0552 22.9959L18.7168 23.0005L18.7167 24.5049C18.8698 24.5983 19.298 24.7895 19.5187 24.819L19.512 22.3827L17.2516 22.3863L17.2695 25.1337C17.6799 25.3175 18.2722 25.582 18.7148 25.7272L18.6955 27.5099L18.0572 27.5145L18.0595 25.9809L17.2718 25.6548Z"
				fill="#EE4645"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.6411 21.5615C16.6568 21.5842 16.706 21.7437 16.832 21.5615C16.6865 21.5084 16.6832 21.5462 16.6411 21.5615Z"
				fill="#A4211E"
			/>
		</svg>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};
