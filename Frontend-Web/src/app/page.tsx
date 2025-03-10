"use client";

import React from "react";
import {
  Layout,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Card,
  Divider,
  Statistic,
  Avatar,
  Steps,
  Carousel,
} from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  BlockOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

export default function Home() {
  return (
    <Layout className="layout">
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: "0 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <BlockOutlined
            style={{ fontSize: "24px", color: "#1890ff", marginRight: "10px" }}
          />
          <Title level={3} style={{ color: "white", margin: 0 }}>
            Oracis AI
          </Title>
        </div>
        <Space>
          <Button type="text" style={{ color: "white" }}>
            Home
          </Button>
          <Button type="text" style={{ color: "white" }}>
            Features
          </Button>
          <Button type="text" style={{ color: "white" }}>
            Solutions
          </Button>
          <Button type="text" style={{ color: "white" }}>
            About
          </Button>
          <Button type="text" style={{ color: "white" }}>
            Contact
          </Button>
          <Button type="primary" shape="round" icon={<RocketOutlined />}>
            Get Started
          </Button>
        </Space>
      </Header>

      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        {/* Hero Section */}
        <Row
          gutter={[24, 48]}
          align="middle"
          style={{ minHeight: "85vh", padding: "60px 0" }}
        >
          <Col xs={24} lg={12}>
            <Title>
              Connect, Create, and Contract with
              <span style={{ color: "#1890ff" }}> Blockchain Technology</span>
            </Title>
            <Title level={4} style={{ fontWeight: "normal", marginBottom: 30 }}>
              Revolutionizing how job seekers and companies connect, with
              AI-powered profile optimization and secure blockchain contracts.
            </Title>
            <Space size="large">
              <Button
                type="primary"
                size="large"
                shape="round"
                icon={<RocketOutlined />}
              >
                Get Started
              </Button>
              <Button size="large" shape="round">
                Learn More
              </Button>
            </Space>
          </Col>
          <Col xs={24} lg={12} style={{ textAlign: "center" }}>
            <img
              src="/hero-image.svg"
              alt="Oracis AI Platform"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        {/* Stats Section */}
        <div
          style={{
            background: "#f8f9fa",
            padding: "60px 0",
            margin: "0 -50px",
          }}
        >
          <Row
            justify="center"
            style={{ textAlign: "center", padding: "0 50px" }}
          >
            <Col span={24}>
              <Title level={2}>Transforming the Hiring Landscape</Title>
              <Divider />
            </Col>
          </Row>
          <Row
            gutter={[48, 48]}
            justify="center"
            style={{ padding: "20px 50px" }}
          >
            <Col xs={24} sm={12} lg={8}>
              <Card
                bordered={false}
                style={{ textAlign: "center", height: "100%" }}
              >
                <Statistic
                  title="Job Seekers"
                  value={25000}
                  prefix={<UserOutlined />}
                  suffix="+"
                />
                <Paragraph style={{ marginTop: 20 }}>
                  Active job seekers finding their dream roles through our
                  platform
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                bordered={false}
                style={{ textAlign: "center", height: "100%" }}
              >
                <Statistic
                  title="Companies"
                  value={1200}
                  prefix={<TeamOutlined />}
                  suffix="+"
                />
                <Paragraph style={{ marginTop: 20 }}>
                  Companies sourcing top talent with our AI-powered matching
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                bordered={false}
                style={{ textAlign: "center", height: "100%" }}
              >
                <Statistic
                  title="Secure Contracts"
                  value={18500}
                  prefix={<FileTextOutlined />}
                  suffix="+"
                />
                <Paragraph style={{ marginTop: 20 }}>
                  Blockchain-verified contracts executed between parties
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Main Features Section */}
        <div style={{ padding: "80px 0" }}>
          <Row justify="center" style={{ textAlign: "center" }}>
            <Col span={24}>
              <Title level={2}>Powerful Features</Title>
              <Text type="secondary" style={{ fontSize: "18px" }}>
                Our comprehensive suite of tools for job seekers and employers
              </Text>
              <Divider />
            </Col>
          </Row>

          <Row gutter={[48, 48]} align="middle" style={{ marginTop: 30 }}>
            <Col xs={24} lg={12}>
              <img
                src="/ai-profile-optimization.svg"
                alt="AI Profile Optimization"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col xs={24} lg={12}>
              <Title level={3}>AI-Powered Profile Optimization</Title>
              <Paragraph style={{ fontSize: "16px" }}>
                Our advanced AI analyzes your experience, skills, and job market
                trends to create standout profiles that get noticed by
                employers.
              </Paragraph>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Smart Resume Builder</Text>
                    <Paragraph>
                      Create tailored resumes for specific industries and roles
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Skill Gap Analysis</Text>
                    <Paragraph>
                      Identify and develop skills that make you more competitive
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Keyword Optimization</Text>
                    <Paragraph>
                      Enhance visibility in employer searches with strategic
                      keywords
                    </Paragraph>
                  </div>
                </div>
              </Space>
              <Button
                type="primary"
                style={{ marginTop: 20 }}
                icon={<ArrowRightOutlined />}
              >
                Explore AI Features
              </Button>
            </Col>
          </Row>

          <Divider style={{ margin: "60px 0" }} />

          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={{ span: 12, order: 2 }}>
              <img
                src="/blockchain-contracts.svg"
                alt="Blockchain Contracts"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col xs={24} lg={{ span: 12, order: 1 }}>
              <Title level={3}>Blockchain-Secured Contracts</Title>
              <Paragraph style={{ fontSize: "16px" }}>
                Revolutionize the hiring process with immutable, transparent
                contracts that create trust between all parties.
              </Paragraph>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Tamper-Proof Agreements</Text>
                    <Paragraph>
                      Ensure contract terms remain unchanged and verifiable
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Digital Signatures</Text>
                    <Paragraph>
                      Legally binding signatures with cryptographic verification
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CheckCircleOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      marginTop: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Text strong>Smart Contract Automation</Text>
                    <Paragraph>
                      Automate payment schedules and milestone deliverables
                    </Paragraph>
                  </div>
                </div>
              </Space>
              <Button
                type="primary"
                style={{ marginTop: 20 }}
                icon={<ArrowRightOutlined />}
              >
                Learn About Blockchain
              </Button>
            </Col>
          </Row>
        </div>

        {/* How It Works Section */}
        <div
          style={{
            background: "#f8f9fa",
            padding: "80px 0",
            margin: "0 -50px",
          }}
        >
          <Row
            justify="center"
            style={{ textAlign: "center", padding: "0 50px" }}
          >
            <Col span={24}>
              <Title level={2}>How Oracis AI Works</Title>
              <Text type="secondary" style={{ fontSize: "18px" }}>
                Your journey to career success in four simple steps
              </Text>
              <Divider />
            </Col>
          </Row>

          <Row justify="center" style={{ padding: "20px 50px" }}>
            <Col xs={24} lg={18}>
              <Steps
                direction="vertical"
                current={1}
                items={[
                  {
                    title: "Create Your Profile",
                    description:
                      "Sign up and build your professional profile with our AI-powered tools that highlight your strengths.",
                    icon: <UserOutlined />,
                  },
                  {
                    title: "Optimize with AI",
                    description:
                      "Our AI analyzes your profile, suggests improvements, and creates customized CVs for different opportunities.",
                    icon: <RocketOutlined />,
                  },
                  {
                    title: "Connect with Companies",
                    description:
                      "Get matched with companies looking for your specific skills and experience through our intelligent network.",
                    icon: <TeamOutlined />,
                  },
                  {
                    title: "Secure with Blockchain",
                    description:
                      "When you find the right opportunity, finalize agreements with our blockchain contract technology.",
                    icon: <BlockOutlined />,
                  },
                ]}
              />
            </Col>
          </Row>
        </div>

        {/* Testimonials Section */}
        <div style={{ padding: "80px 0" }}>
          <Row justify="center" style={{ textAlign: "center" }}>
            <Col span={24}>
              <Title level={2}>Success Stories</Title>
              <Text type="secondary" style={{ fontSize: "18px" }}>
                See how Oracis AI has transformed careers and hiring processes
              </Text>
              <Divider />
            </Col>
          </Row>

          <Carousel autoplay style={{ marginTop: 30 }}>
            <div>
              <Card style={{ margin: "20px 50px", padding: "20px" }}>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} sm={6} style={{ textAlign: "center" }}>
                    <Avatar size={100} icon={<UserOutlined />} />
                    <Title level={4} style={{ marginTop: 10, marginBottom: 0 }}>
                      Sarah Johnson
                    </Title>
                    <Text type="secondary">Software Developer</Text>
                  </Col>
                  <Col xs={24} sm={18}>
                    <Paragraph
                      style={{ fontSize: "16px", fontStyle: "italic" }}
                    >
                      "Oracis AI completely transformed my job search. The AI
                      profile optimization highlighted skills I didn't know were
                      valuable, and I secured a position at a top tech company
                      within two weeks. The blockchain contract gave me
                      confidence in the employment terms."
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            </div>
            <div>
              <Card style={{ margin: "20px 50px", padding: "20px" }}>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} sm={6} style={{ textAlign: "center" }}>
                    <Avatar size={100} icon={<TeamOutlined />} />
                    <Title level={4} style={{ marginTop: 10, marginBottom: 0 }}>
                      Techsphere Inc.
                    </Title>
                    <Text type="secondary">Technology Company</Text>
                  </Col>
                  <Col xs={24} sm={18}>
                    <Paragraph
                      style={{ fontSize: "16px", fontStyle: "italic" }}
                    >
                      "As a growing startup, finding the right talent
                      efficiently is crucial. Oracis AI has reduced our hiring
                      time by 60% and improved the quality of matches. The
                      blockchain contracts have streamlined our onboarding
                      process and built trust with new hires."
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            </div>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div
          style={{
            background: "linear-gradient(90deg, #1890ff 0%, #096dd9 100%)",
            padding: "60px 0",
            margin: "0 -50px",
            textAlign: "center",
            color: "white",
          }}
        >
          <Row justify="center" style={{ padding: "0 50px" }}>
            <Col xs={24} md={16}>
              <Title style={{ color: "white" }}>
                Ready to Transform Your Career Journey?
              </Title>
              <Paragraph style={{ fontSize: "18px", marginBottom: 30 }}>
                Join thousands of professionals and companies revolutionizing
                how hiring works with AI and blockchain technology.
              </Paragraph>
              <Space size="large">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "white",
                    borderColor: "white",
                    color: "#1890ff",
                  }}
                >
                  Sign Up Now
                </Button>
                <Button ghost size="large">
                  Request Demo
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer style={{ textAlign: "center", padding: "50px" }}>
        <Row gutter={[48, 48]}>
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <BlockOutlined
                style={{
                  fontSize: "24px",
                  color: "#1890ff",
                  marginRight: "10px",
                }}
              />
              <Title level={4} style={{ margin: 0 }}>
                Oracis AI
              </Title>
            </div>
            <Paragraph>
              Revolutionizing career connections with AI and blockchain
              technology.
            </Paragraph>
            <Space>
              <Button type="text" shape="circle" icon={<GlobalOutlined />} />
              <Button type="text" shape="circle" icon={<UserOutlined />} />
              <Button type="text" shape="circle" icon={<TeamOutlined />} />
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Features</Title>
            <Space direction="vertical">
              <Button type="link" style={{ padding: 0 }}>
                AI Profile Optimization
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Smart CV Builder
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Skill Analysis
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Blockchain Contracts
              </Button>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Company</Title>
            <Space direction="vertical">
              <Button type="link" style={{ padding: 0 }}>
                About Us
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Our Team
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Careers
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Contact
              </Button>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Resources</Title>
            <Space direction="vertical">
              <Button type="link" style={{ padding: 0 }}>
                Blog
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Documentation
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                FAQ
              </Button>
              <Button type="link" style={{ padding: 0 }}>
                Privacy Policy
              </Button>
            </Space>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col>
            <Text type="secondary">© 2025 Oracis AI. All rights reserved.</Text>
          </Col>
          <Col>
            <Space>
              <Button type="link" size="small">
                Terms
              </Button>
              <Button type="link" size="small">
                Privacy
              </Button>
              <Button type="link" size="small">
                Cookies
              </Button>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
