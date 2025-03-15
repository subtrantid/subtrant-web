import React from "react";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-3xl mx-auto">
      <h1 className="font-bold text-2xl sm:text-3xl">Contact Us</h1>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500">
        <p className="font-semibold text-xl mb-6 text-blue-500">Get in Touch</p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="text-blue-500 mr-4 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-400">contact@subtrant.icu</p>
              <p className="text-sm text-gray-500 mt-1">For general inquiries and business collaboration opportunities</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <SiDiscord className="text-blue-500 mr-4 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Discord</h3>
              <p className="text-gray-400">discord.gg/?</p>
              <p className="text-sm text-gray-500 mt-1">Join our community for real-time discussions and support</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-blue-500 mr-4 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-gray-400">Malang, Indonesia</p>
              <p className="text-sm text-gray-500 mt-1">Our team is primarily based in Malang</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="text-blue-500 mr-4 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-400">---</p>
              <p className="text-sm text-gray-500 mt-1">---</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500">
        <div className="flex items-center mb-4">
          <MessageSquare className="text-blue-500 mr-3" size={24} />
          <p className="font-semibold text-xl text-blue-500">How We Can Help</p>
        </div>
        
        <p className="text-gray-400 mb-6">
          At Subtrant, we're dedicated to creating innovative technology solutions for educational institutions.
          Whether you're looking to collaborate on a project, need technical assistance, or want to join our
          community, we're here to help.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://discord.gg/?" className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            <SiDiscord className="mr-2" size={20} />
            Join our Discord
          </a>
          <a href="https://github.com/subtrantid" className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors">
            <SiGithub className="mr-2" size={20} />
            Explore our GitHub
          </a>
        </div>
      </div>
    </div>
  );
}