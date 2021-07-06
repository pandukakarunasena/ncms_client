import { Layout } from 'antd';
import PatientForm from '../landing/patient_form/PatientForm';
import DailyStatCards from '../stats/DailyStatCards';
const { Header, Content, Footer } = Layout;

function MainLayout() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <DailyStatCards />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et vulputate sem. Praesent pharetra pretium velit, eu ultricies tortor
          laoreet sit amet. Maecenas tincidunt vestibulum lobortis. Sed auctor
          turpis quis urna tristique, at accumsan tellus blandit. Aliquam
          scelerisque mauris nunc, non iaculis sapien placerat et. Aliquam sit
          amet justo sed est pellentesque elementum. Vivamus auctor magna id
          elementum accumsan. Donec vel neque nec est porta mollis id et ex.
          Curabitur commodo mi nec venenatis pharetra. Vestibulum mi nunc,
          maximus sit amet ligula in, euismod posuere velit. Nulla facilisi. Ut
          non maximus sapien. Phasellus faucibus purus a gravida molestie. Sed
          consectetur nunc quam, at vulputate dolor faucibus vitae. Curabitur
          vitae nisi sit amet sem tincidunt mattis non ut metus. Curabitur
          ullamcorper nisi at vehicula pretium. Aliquam mattis vel ligula quis
          ornare. Sed vitae metus gravida turpis pellentesque interdum eget ac
          est. Pellentesque sit amet purus a lorem consequat tincidunt nec nec
          tellus. Maecenas elementum sed tellus sit amet gravida. Nullam mattis
          nibh ut fringilla ultrices. Suspendisse placerat massa tortor, id
          varius ex cursus rutrum. Vestibulum sed elementum lectus, id finibus
          dui.
        </div>
        <PatientForm />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by panduka karunasena with 💟{' '}
      </Footer>
    </Layout>
  );
}

export default MainLayout;
