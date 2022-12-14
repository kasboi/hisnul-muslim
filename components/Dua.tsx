import { Box, Divider, Text, VStack } from "@chakra-ui/react"
import { NextPage } from "next"

const duaList = [
    {
        id: 1,
        arabic: "الحَمْـدُ لِلّهِ الّذي أَحْـيانا بَعْـدَ م أَماتَـنا وَإليه النُّـشور",
        transliteration:
            "Alhamdu lillahil-lathee ahyana baAAda ma amatana wa-ilayhin-nushoor",
        translation:
            "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
    },
    {
        id: 2,
        arabic: "لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شَـريكَ له، لهُ المُلـكُ ولهُ الحَمـد، وهوَ على كلّ شيءٍ قدير، سُـبْحانَ اللهِ، والحمْـدُ لله ، ولا إلهَ إلاّ اللهُ واللهُ أكبَر، وَلا حَولَ وَلا قوّة إلاّ باللّهِ العليّ العظيم رَبِّ اغْفرْ لي",
        transliteration:
            "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer, subhanal-lah, walhamdu lillah, wala ilaha illal-lah wallahu akbar, wala hawla wala quwwata illa billahil-AAaliyyil AAatheem.",
        translation:
            "None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme. O my Lord forgive me.",
    },
    {
        id: 3,
        arabic: "الحمدُ للهِ الذي عافاني في جَسَدي وَرَدّ عَليّ روحي وَأَذِنَ لي بِذِكْرِه",
        transliteration:
            "Alhamdu lillahil-lathee AAafanee fee jasadee waradda AAalayya roohee wa-athina lee bithikrih",
        translation:
            "All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.",
    },
]

const Dua: NextPage = () => {
    return (
        <Box px={4} py={12}>
            <VStack maxW={["xl"]} mx="auto" spacing={6}>
                {duaList.map((item, index) => (
                    <VStack py={6} px={4} spacing={4} key={index}>
                        <Box
                            bg="blackAlpha.500"
                            py={6}
                            px={4}
                            borderRadius={10}
                            dir="rtl"
                            textStyle="arabia"
                        >
                            {item.arabic}
                        </Box>
                        <Text>
                            {item.transliteration}
                        </Text>
                        <Divider />
                        <Text>
                            {item.translation}
                        </Text>
                    </VStack>
                ))}
            </VStack>
        </Box>
    )
}

export default Dua
