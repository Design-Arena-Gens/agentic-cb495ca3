'use client';

import { Phone, TrendingDown, Target, AlertCircle, CheckCircle2, Search, MapPin, Star, Clock, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Phone className="text-green-600" />
            Google My Business কল অপটিমাইজেশন গাইড
          </h1>
          <p className="text-gray-600 mt-2">পর্দা ব্যবসা - সৌদি আরব, রিয়াদ</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Problem Statement */}
        <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-2">বর্তমান সমস্যা</h2>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-center gap-2">
                  <TrendingDown size={18} />
                  <span>ইম্প্রেশন এবং ক্লিক আসছে কিন্তু কল আসছে না বা খুব কম</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target size={18} />
                  <span>বিজ্ঞাপনে খরচ হচ্ছে কিন্তু রিটার্ন কম</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Solutions */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-600" />
            সমাধান - এখনই করুন
          </h2>

          <div className="space-y-6">

            {/* Solution 1 */}
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="text-green-600" size={22} />
                ১. ফোন নম্বর সঠিকভাবে সেটআপ করুন
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-900">✓ Click-to-Call বাটন যুক্ত করুন:</strong>
                  <p className="mt-1">Google My Business প্রোফাইলে "Call" বাটন স্পষ্ট এবং বড় করে দেখান</p>
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-900">✓ সৌদি নম্বর ব্যবহার করুন:</strong>
                  <p className="mt-1">+966 দিয়ে শুরু হওয়া স্থানীয় নম্বর ব্যবহার করুন - লোকাল কাস্টমাররা বিদেশী নম্বরে কল করতে চায় না</p>
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-900">✓ WhatsApp নম্বর যুক্ত করুন:</strong>
                  <p className="mt-1">সৌদি আরবে WhatsApp খুব জনপ্রিয় - WhatsApp Business অ্যাকাউন্ট লিংক করুন</p>
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-900">✓ 24/7 উপলব্ধতা দেখান:</strong>
                  <p className="mt-1">যদি সম্ভব হয়, ব্যবসার সময় বাড়ান বা "24 ঘন্টা খোলা" দেখান</p>
                </li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Search className="text-blue-600" size={22} />
                ২. কীওয়ার্ড এবং টার্গেটিং উন্নত করুন
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-green-50 p-4 rounded-lg">
                  <strong className="text-green-900">✓ আরবি কীওয়ার্ড ব্যবহার করুন:</strong>
                  <p className="mt-1 font-arabic">ستائر الرياض, محل ستائر, تفصيل ستائر الرياض, ستائر راقية</p>
                  <p className="text-sm mt-1">(পর্দা রিয়াদ, পর্দার দোকান, রিয়াদে পর্দা কাস্টমাইজেশন, উচ্চমানের পর্দা)</p>
                </li>
                <li className="bg-green-50 p-4 rounded-lg">
                  <strong className="text-green-900">✓ স্থানীয় এলাকা নাম যুক্ত করুন:</strong>
                  <p className="mt-1">রিয়াদের নির্দিষ্ট জেলা যেমন: الملز, العليا, النخيل (আল-মালাজ, আল-ওলায়া, আন-নাখিল)</p>
                </li>
                <li className="bg-green-50 p-4 rounded-lg">
                  <strong className="text-green-900">✓ "জরুরি" বা "দ্রুত সেবা" শব্দ ব্যবহার করুন:</strong>
                  <p className="mt-1 font-arabic">تركيب فوري, خدمة سريعة, توصيل في نفس اليوم</p>
                </li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MessageSquare className="text-purple-600" size={22} />
                ৩. বিজ্ঞাপন কন্টেন্ট পরিবর্তন করুন
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <strong className="text-yellow-900">✓ Call-to-Action স্পষ্ট করুন:</strong>
                  <p className="mt-1">"এখনই কল করুন", "ফ্রি পরামর্শ নিন", "আজই অর্ডার করুন"</p>
                  <p className="mt-1 font-arabic">اتصل الآن, استشارة مجانية, اطلب اليوم</p>
                </li>
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <strong className="text-yellow-900">✓ অফার/ডিসকাউন্ট যুক্ত করুন:</strong>
                  <p className="mt-1">"১০% ছাড়", "ফ্রি ইনস্টলেশন", "২টি কিনলে ১টি ফ্রি"</p>
                </li>
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <strong className="text-yellow-900">✓ ছবিতে ফোন নম্বর দেখান:</strong>
                  <p className="mt-1">বিজ্ঞাপন ছবিতে আপনার ফোন নম্বর বড় করে লিখুন</p>
                </li>
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="text-orange-600" size={22} />
                ৪. প্রোফাইল সম্পূর্ণ করুন
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-pink-50 p-4 rounded-lg">
                  <strong className="text-pink-900">✓ ১০-১৫টি উচ্চমানের ছবি যুক্ত করুন:</strong>
                  <p className="mt-1">পর্দার বিভিন্ন ডিজাইন, আপনার শোরুম, কাজের নমুনা</p>
                </li>
                <li className="bg-pink-50 p-4 rounded-lg">
                  <strong className="text-pink-900">✓ কাস্টমার রিভিউ চান:</strong>
                  <p className="mt-1">সন্তুষ্ট কাস্টমারদের Google-এ রিভিউ দিতে বলুন - ৫-স্টার রেটিং কল বাড়ায়</p>
                </li>
                <li className="bg-pink-50 p-4 rounded-lg">
                  <strong className="text-pink-900">✓ ব্যবসার বর্ণনা বিস্তারিত লিখুন:</strong>
                  <p className="mt-1">কী কী সেবা দেন, কত বছরের অভিজ্ঞতা, কেন আপনি সেরা - আরবি এবং ইংরেজিতে</p>
                </li>
                <li className="bg-pink-50 p-4 rounded-lg">
                  <strong className="text-pink-900">✓ নিয়মিত পোস্ট করুন:</strong>
                  <p className="mt-1">সপ্তাহে ২-৩টি পোস্ট - নতুন ডিজাইন, অফার, কাস্টমার প্রজেক্ট</p>
                </li>
              </ul>
            </div>

            {/* Solution 5 */}
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="text-red-600" size={22} />
                ৫. টাইমিং অপটিমাইজ করুন
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-indigo-50 p-4 rounded-lg">
                  <strong className="text-indigo-900">✓ সেরা সময়ে বিজ্ঞাপন দেখান:</strong>
                  <p className="mt-1">সৌদি আরবে: সন্ধ্যা ৭-১১টা এবং বৃহস্পতি-শুক্রবার</p>
                </li>
                <li className="bg-indigo-50 p-4 rounded-lg">
                  <strong className="text-indigo-900">✓ রমজান এবং ঈদের সময় বিশেষ ক্যাম্পেইন:</strong>
                  <p className="mt-1">এই সময়ে মানুষ বাড়ি সাজাতে বেশি খরচ করে</p>
                </li>
                <li className="bg-indigo-50 p-4 rounded-lg">
                  <strong className="text-indigo-900">✓ দ্রুত রেসপন্স দিন:</strong>
                  <p className="mt-1">কেউ কল করলে বা মেসেজ দিলে ৫ মিনিটের মধ্যে জবাব দিন</p>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Additional Tips */}
        <section className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="text-yellow-300" />
            অতিরিক্ত টিপস
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 mt-1" />
              <span><strong>Google Ads Call Extensions ব্যবহার করুন:</strong> শুধু GMB নয়, Google Ads-এও Call Extension যুক্ত করুন</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 mt-1" />
              <span><strong>Call Tracking নম্বর ব্যবহার করুন:</strong> জানুন কোন বিজ্ঞাপন থেকে কল আসছে</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 mt-1" />
              <span><strong>প্রতিযোগীদের চেক করুন:</strong> অন্য পর্দার দোকানগুলো কী করছে দেখুন</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 mt-1" />
              <span><strong>সোশ্যাল মিডিয়া যুক্ত করুন:</strong> Instagram এবং Snapchat সৌদি আরবে জনপ্রিয়</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 mt-1" />
              <span><strong>ভিডিও যুক্ত করুন:</strong> পর্দা ইনস্টলেশনের ছোট ভিডিও আপলোড করুন</span>
            </li>
          </ul>
        </section>

        {/* Action Checklist */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">আজই করুন - চেকলিস্ট</h2>
          <div className="space-y-3">
            {[
              'GMB প্রোফাইলে সৌদি ফোন নম্বর (+966) যুক্ত করুন',
              'WhatsApp Business নম্বর যুক্ত করুন',
              'বিজ্ঞাপনে আরবি কীওয়ার্ড যুক্ত করুন (ستائر الرياض)',
              'Call-to-Action আরও স্পষ্ট করুন ("اتصل الآن")',
              '১০% ছাড় বা বিশেষ অফার যুক্ত করুন',
              '১০-১৫টি উচ্চমানের ছবি আপলোড করুন',
              'কাস্টমারদের কাছে Google রিভিউ চান',
              'বিজ্ঞাপন সময় সন্ধ্যা ৭-১১টায় সেট করুন',
              'ব্যবসার বর্ণনা আরবি ও ইংরেজিতে লিখুন',
              'সপ্তাহে ২-৩টি নতুন পোস্ট করুন'
            ].map((item, index) => (
              <label key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-green-600" />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Results Timeline */}
        <section className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">কখন ফলাফল দেখতে পাবেন?</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-purple-900">৭-১০ দিনে:</strong>
              <p className="text-gray-700 mt-1">ক্লিক-টু-কল রেট বাড়বে, WhatsApp মেসেজ আসা শুরু হবে</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-blue-900">২-৩ সপ্তাহে:</strong>
              <p className="text-gray-700 mt-1">আরবি কীওয়ার্ড থেকে আরও রিলেভেন্ট ট্রাফিক আসবে</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-green-900">১ মাসে:</strong>
              <p className="text-gray-700 mt-1">রিভিউ বাড়লে এবং প্রোফাইল সম্পূর্ণ হলে কল ৩-৫ গুণ বাড়বে</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8">
          <p className="text-sm">এই পরামর্শগুলো অনুসরণ করলে আপনার Google My Business বিজ্ঞাপন থেকে কল আসা শুরু হবে ইনশাআল্লাহ</p>
          <p className="text-xs mt-2">সফলতা কামনা করি! 🎉</p>
        </footer>

      </div>
    </main>
  );
}
