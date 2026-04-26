import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  { 
    text: 'तिम्रो हाँसो अलि बेग्लै छ, यो कोलाहलमा पनि आफ्नै धुन बोकेर हिँड्छ। अरूले जे सुकै भनून्, तर तिमीले आफ्नो त्यो चञ्चलता कहिल्यै नगुमाउनु।', 
    name: 'निशा', 
    role: 'आफ्नै धुन' 
  },
  { 
    text: 'बीस वर्ष पुग्दा मनमा धेरै कुरा खेल्छन् होला, अलि डर अलि उत्साह। तर याद राख, तिमीले केही प्रमाणित गरिरहनु पर्दैन, तिमी जस्तो छौ, यो उमेरको लागि त्यही काफी छ।', 
    name: 'अस्तित्व', 
    role: 'नयाँ मोड' 
  },
  { 
    text: 'कति रातहरू गाह्रो भए होलान्, कति पटक भित्रभित्रै भाँचियौ होला। तर आज यहाँसम्म आइपुग्दा तिम्रो आँखामा जुन चमक छ नि, त्यो नै तिम्रो सबैभन्दा ठूलो जित हो।', 
    name: 'हिम्मत', 
    role: 'जित' 
  },
  { 
    text: 'यो संसारमा मान्छेहरू आउँछन् र जान्छन्, तर तिम्रो त्यो अलिकति जिद्दी र धेरै मायालु स्वभाव—यसलाई सधैं जीवित राख्नु। यही नै तिमीलाई अरूभन्दा फरक बनाउने कुरा हो।', 
    name: 'स्वभाव', 
    role: 'खास तिमी' 
  },
  { 
    text: 'समय छिटो दौडिन्छ, तर तिमी कहिलेकाहीँ रोकिनु। आफ्नै मनको कुरा सुन्नु। तिमी आफैंमा एउटा यस्तो संसार हौ, जहाँ खुसी हुन कसैको अनुमति चाहिँदैन।', 
    name: 'दर्शन', 
    role: 'स्वतन्त्र मन' 
  },
  { 
    text: 'संसारलाई धेरै ठूला कुरा चाहिएको छैन, बस तिमी जस्तो कोमल मन भएको एउटा मान्छे भए पुग्छ। तिमी हुनु मात्रै पनि धेरैका लागि एउटा ठूलो राहत हो।', 
    name: 'महत्व', 
    role: 'उपहार' 
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
          >
            निशाको लागि मात्र
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
          >
            केही मनका कुरा
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((q, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative glass-card gradient-border rounded-3xl p-7 sm:p-8 group"
            >
              <Quote
                className="absolute top-5 right-5 h-4 w-4 text-accent/30 group-hover:text-accent/60 transition-colors"
                strokeWidth={1.5}
              />
              <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-foreground/90 mb-6">
                "{q.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-gradient-rose-gold flex items-center justify-center font-serif text-background font-bold">
                  {q.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;