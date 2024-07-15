import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Tabs() {
    const [tabs, setTabs] = useState<number>(1);
    const tabsList = [
      {
        id: 1,
        name: "Tab 1",
      },
      {
        id: 2,
        name: "Tab 2",
      },
      {
        id: 3,
        name: "Tab 3",
      },
    ];
    return (
      <>
        <div className="bg-gray-900 text-white min-h-screen p-3 flex flex-col item-center pt-[10%]">
          <div className="pb-11">
            <p className="font-bold text-3xl text-center">React + Framer Motion</p>
            <p className="text-lg text-center mt-3">
              Using React and Framer Motion to create   tabs using motion and animatePresence
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 mx-auto">
            <section className="flex justify-between pt-6">
              {tabsList.map((tab) => (
                <motion.div
                  key={tab.id}
                  onClick={() => setTabs(tab.id)}
                  className={tab.id == tabs ? "selected tabstyle" : "tabstyle"}
                >
                  <motion.h1
                    className="text-xl font-bold text-center "
                    whileHover={{ scale: 1.2 }}
                  >
                    {tab.name}
                  </motion.h1>
                </motion.div>
              ))}
            </section>
            <section className="">
              <AnimatePresence>
                {tabs === 1 && (
                  <motion.section
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5,delay:0.25 }}
                  >
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {tabs === 2 && (
                  <motion.section
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5,delay:0.25 }}
                  >
                    <div>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, minima.
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {tabs === 3 && (
                  <motion.section
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5,delay:0.25 }}
  
                  
                  >
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, laborum.
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </section>
          </div>
        </div>
      </>
    );
  }
  
  