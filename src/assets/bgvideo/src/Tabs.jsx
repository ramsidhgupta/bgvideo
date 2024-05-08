import React from "react";
import "./Tabs.css";

import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import sm1 from './assets/sm1.jpg'
import sm3 from './assets/sm3.png'
import case2 from './assets/case2.jpg'
import { Icon } from "@iconify/react";

export const Tabs = () => {
  return (
    <section className="wrapper bg-light">
        <div className="container pt-md-8 pt-8 pt-md-0">
          <div className="row">
            <div className="col-lg-12 mb-10">
              <div className="card col-12 h-100">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-pills d-flex flex-wrap">
                    <li className="nav-item  mb-3 mx-2">
                      <a
                        className="nav-link active flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-1"
                      >
                        <img
                          src={one}
                          height="40"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          Firmware
                        </span>
                      </a>
                    </li>
                    <li className="nav-item  mb-3 mx-2">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-2"
                      >
                        <img
                          src={two}
                          height="50"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          Middleware
                        </span>
                      </a>
                    </li>
                    <li className="nav-item mb-3 mx-2">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          apps
                        </span>
                      </a>
                    </li>
                    <li className="nav-item mb-3 mx-2">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          hmis
                        </span>
                      </a>
                    </li>
                    <li className="nav-item mb-3 mx-2">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          Connectivity
                        </span>
                      </a>
                    </li>
                    <li className="nav-item mb-3 mx-2">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                          className="mx-2"
                        />
                        <span className="display-block text-uppercase mt-3">
                          proximity
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-0 mt-md-5">
                    <div className="tab-pane fade show active" id="tab3-1">
                      <div className="row">
                        <div className="col-md-8">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns ">
                            <li>
                              <Icon icon="flat-color-icons:ok" />System Verilog
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Based
                              Constrained Random Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Test Bench
                              Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SoC and IP
                              Functional Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Subsystem
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Formal
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Power Aware
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Performance Tests
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SystemC/TLM
                              Modelling
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />VIP Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Development
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={sm1}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-2">
                      <p>
                        With a team of specialized engineers of Physical Design,
                        DFT Synthesis, and STA, TechsoC can give you a one-stop
                        solution for building all kinds of next-generation
                        leadership products. We help customers accelerate their
                        end-to-end product development with our extensive design
                        capabilities.
                      </p>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-6 order-1 order-md-1">
                              <h4>Physical Design Services</h4>
                              <p>
                                Proficient in implementing complex ASICs in 7nm,
                                10nm, 14nm, 16nm and 28nm.
                              </p>
                            </div>
                            <div className="col-md-6 order-2 order-md-3">
                              <p>
                                <strong>
                                  Our physical design services cover the
                                  following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Die-size
                                  Estimation
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Floor Plan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Pad Ring &
                                  RDL
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Partition &
                                  Budgeting
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Power-grid
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-Power
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Block/Chip
                                  Level
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Clocking
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />DRC/LVS/DFM
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6 order-3 order-md-2">
                              <h4>DFT, Synthesis and STA</h4>
                              <p>
                                We have experience across various DFT Techniques
                                like Scan, ATPG, Bist, and Boundary Scan, then
                                make TechsoC your first choice.
                              </p>
                            </div>
                            <div className="col-md-6 order-4  order-md-4">
                              <p>
                                <strong>
                                  Our DFT Service suite includes the following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Insertion
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Compression
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />ATPG, MBIST
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />JTAG, B-Scan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Aware Synth
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Timing
                                  Closure
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />SI Analysis
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Formal
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-power
                                  Checks
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <img
                            src={sm3}
                            className="w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-3">
                      <div className="row">
                        <div className="col-md-8">
                          <p>
                            Experience bug free software with TechsoC’s test
                            automation frameworks and error diagnosis system.
                            Our team of competent engineers working in the STA
                            Emulation and Validation team are experts in
                            prototyping and emulating complex IC designs for
                            streamlined system debugging and software bring-up.
                            Be it board bring-up, development of test automation
                            frameworks, error diagnosis or system debug, our STA
                            Emulation and Validation Services team can provide
                            you with the most suitable solution.
                          </p>

                          <p>
                            Our distinguished team has experience in working
                            with various semiconductor industries across the
                            globe for System Level Testing, Signal Integrity,
                            Bench Marking, Test Content Development and
                            Automation.
                          </p>
                          <p>
                            <strong>
                              Our FPGA Emulation and Validation Portfolio
                              include the following services
                            </strong>
                          </p>
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns">
                            <li>
                              <Icon icon="flat-color-icons:ok" />GLS
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA design
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA prototyping
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Emulation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Post Silicon
                              Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />IP Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Protocol
                              Qualification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Processor Based
                              Emulation
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={case2}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
