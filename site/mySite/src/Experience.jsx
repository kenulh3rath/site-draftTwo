import {ConfigProvider, Timeline} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {Dot} from "recharts";

export default function Experience() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: '#fff',
                    tailColor: '#fff',
                },

                components: {
                    Timeline: {
                        tailColor: '#84828f',
                    }
                }



            }}
        >
            <Timeline className="mx-auto mt-10"
                      mode='left'
                      items={[
                          {
                              color: '#6A687A',
                              label: 'Feb 2020 – Feb 2021',
                              children: 'Captain Promotion LTD',
                          },
                          {
                              color: '#6A687A',
                              children: 'Graphic Designer',
                          },
                          {
                              color: '#6A687A',
                              label: 'June 2023 – January 2024',
                              children: 'University of South Wales Student Union',
                          },
                          {
                              color: '#6A687A',
                              children: 'Vice-President of Activities',
                          },
                      ]}
            />
        </ConfigProvider>


    );
};
