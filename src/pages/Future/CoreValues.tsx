import { Divider, Grid, Typography } from '@mui/material'
import CoreValueItem from './CoreValueItem'
import Image_1 from '../../assets/images/future01.svg';
import Image_2 from '../../assets/images/future02.svg';
import Image_3 from '../../assets/images/future03.svg';
import Image_4 from '../../assets/images/future04.svg';
import Image_5 from '../../assets/images/future05.svg';
import Image_6 from '../../assets/images/future06.svg';
import Image_7 from '../../assets/images/future07.svg';
import Image_8 from '../../assets/images/future08.svg';
import Image_9 from '../../assets/images/future09.svg';

export default function CoreValues() {
    return (
        <>
            <Grid container sx={{ p: 5 }}>

                <Grid item xs={12} md={12}>
                    <Typography variant="h2">Giá trị cốt lõi</Typography>
                    <Divider />
                </Grid>

                <Grid item xs={12} md={4}>
                    <CoreValueItem color="#254ABC" textMain="Giá trị cốt lõi" img={Image_1}  text="Với mỗi dự án, chúng tôi cam kết mang đến chất lượng vượt trội, an toàn tuyệt đối và bàn giao đúng hẹn."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="#29C66F" textMain="Tôn trọng & Nhân văn" img={Image_2} text="Chúng tôi làm việc với sự thấu hiểu và tinh thần đồng đội. Chúng tôi không thoả hiệp với những hành động đi ngược lại tính nhân văn và không tạo ra giá trị cho cộng đồng. Đối xử công bằng và tử tế, không phân biệt hoàn cảnh xuất thân, vị trí và năng lực."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="#5FD1C1" textMain="Chính trực" img={Image_3} text="Chúng tôi cam kết hoạt động với sự trung thực và minh bạch."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="#E86042" textMain="Tâm huyết" img={Image_4} text="Chúng tôi truyền cảm hứng và tạo động lực cho tất cả mọi người, bằng sự kiên định và cam kết với mục tiêu phát triển để được công nhận trên toàn thế giới."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="#F5BA42" textMain="Chu đáo" img={Image_5} text="Chúng tôi thấu hiểu và nỗ lực đem đến những lợi ích cho tất cả các bên; tạo ra cơ hội phát triển sự nghiệp và thịnh vượng cho mỗi cá nhân."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="Chocolate" textMain="Can đảm để bứt phá" img={Image_6} text="Chúng tôi sẵn sàng đương đầu với thử thách và chấp nhận rủi ro để phá vỡ các rào cản, vượt qua giới hạn bản thân và cùng tạo nên sự vượt trội."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="DarkGreen" textMain="Không ngừng cải tiến" img={Image_7} text="Chúng tôi luôn nỗ lực cải tiến và ứng dụng các công nghệ hiện đại trên thế giới nhằm giải quyết các thách thức trong kinh doanh. Chúng tôi lắng nghe, học hỏi và không ngừng tìm kiếm cho các ý tưởng đột phá để phát triển."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="DarkMagenta" textMain="Khách hàng là trọng tâm" img={Image_8} text="Chúng tôi đặt lợi ích của khách hàng là trọng tâm trong mọi quyết định và hoạt động kinh doanh."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CoreValueItem color="DarkSeaGreen" textMain="Bền vững" img={Image_9} text="Chúng tôi hoạt động với trách nhiệm bảo vệ môi trường và phát triển bền vững, vì thế hệ tương lai."/>
                </Grid>
        

            </Grid>
        </>
    )
}
