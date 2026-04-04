import { motion } from "framer-motion";
import { Check, X, AlertCircle, Info } from "lucide-react";

const comparisons = [
  {
    feature: "Cost",
    intrasphere: { value: "Fair, transparent", status: "green" },
    hiring: { value: "$$$ (salary/benefits)", status: "red" },
    others: { value: "$$$ - $$$$ (project-based)", status: "yellow" }
  },
  {
    feature: "Expertise",
    intrasphere: { value: "Senior talent, diverse skills", status: "green" },
    hiring: { value: "Varies per hire", status: "yellow" },
    others: { value: "Varies", status: "yellow" }
  },
  {
    feature: "Turnaround",
    intrasphere: { value: "Fast, reliable", status: "green" },
    hiring: { value: "Weeks + onboarding", status: "red" },
    others: { value: "Often slower", status: "red" }
  },
  {
    feature: "Flexibility",
    intrasphere: { value: "Scale up/down anytime", status: "green" },
    hiring: { value: "Contracts required", status: "red" },
    others: { value: "Project-based", status: "red" }
  },
  {
    feature: "Design",
    intrasphere: { value: "Modern & original", status: "green" },
    hiring: { value: "Depends on team", status: "red" },
    others: { value: "Agency styles vary", status: "red" }
  },
  {
    feature: "Client Focus",
    intrasphere: { value: "Custom solutions", status: "green" },
    hiring: { value: "Internal priorities", status: "yellow" },
    others: { value: "Multiple clients at once", status: "red" }
  },
  {
    feature: "Support",
    intrasphere: { value: "Ongoing partnership", status: "green" },
    hiring: { value: "Internal capacity", status: "green" },
    others: { value: "Often ends at delivery", status: "red" }
  }
];

const Comparison = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "green": return <Check className="w-5 h-5 text-emerald-500" />;
      case "red": return <X className="w-5 h-5 text-rose-500" />;
      case "yellow": return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default: return null;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "green": return "bg-emerald-50 text-emerald-700";
      case "red": return "bg-rose-50 text-rose-700";
      case "yellow": return "bg-amber-50 text-amber-700";
      default: return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">What Makes Us Different</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
            Why leading businesses choose Intrasphere Labs over hiring or outsourcing elsewhere?
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto overflow-hidden">
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 bg-gray-50 rounded-t-2xl border border-b-0 border-gray-200">
              <div className="p-6 text-gray-500 font-bold uppercase tracking-wider text-xs">Comparison Feature</div>
              <div className="p-6 text-gray-900 font-bold flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Intrasphere Labs
              </div>
              <div className="p-6 text-gray-600 font-medium">Hiring Employees</div>
              <div className="p-6 text-gray-600 font-medium">Other Agencies</div>
            </div>

            <div className="border border-gray-200 rounded-b-2xl overflow-hidden divide-y divide-gray-100">
              {comparisons.map((item, index) => (
                <motion.div 
                  key={index}
                  className="grid grid-cols-4 hover:bg-gray-50/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="p-5 font-bold text-gray-800 flex items-center border-r border-gray-100 bg-gray-50/30">
                    {item.feature}
                  </div>
                  <div className="p-5 flex items-center gap-3 bg-blue-50/20 border-r border-gray-100">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900 font-semibold">{item.intrasphere.value}</span>
                  </div>
                  <div className="p-5 flex items-center gap-3 border-r border-gray-100">
                    {getStatusIcon(item.hiring.status)}
                    <span className="text-gray-600 text-sm whitespace-pre-wrap">{item.hiring.value}</span>
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    {getStatusIcon(item.others.status)}
                    <span className="text-gray-600 text-sm">{item.others.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-8">
            {comparisons.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.feature}</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-blue-100 shadow-sm">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter mb-0.5">Intrasphere Labs</p>
                      <p className="text-gray-900 font-bold">{item.intrasphere.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-100/50 rounded-xl">
                    {getStatusIcon(item.hiring.status)}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter mb-0.5">Hiring Employees</p>
                      <p className="text-gray-600 text-sm">{item.hiring.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-100/50 rounded-xl">
                    {getStatusIcon(item.others.status)}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter mb-0.5">Other Agencies</p>
                      <p className="text-gray-600 text-sm">{item.others.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
