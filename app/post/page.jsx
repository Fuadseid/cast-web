'use client';
import { useState, useRef } from 'react';
import { Camera, Upload, X, Save, User, Film, Award, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileCreation = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    stageName: '',
    bio: '',
    gender: '',
    age: '',
    height: '',
    location: '',
    skills: [],
    languages: [],
    experience: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle gallery upload
  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + galleryImages.length > 6) {
      alert('Maximum 6 images allowed in gallery');
      return;
    }

    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setGalleryImages(prev => [...prev, event.target.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  // Remove gallery image
  const removeGalleryImage = (index) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  };

  // Handle skill tags
  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, e.target.value.trim()]
      }));
      e.target.value = '';
    }
  };

  // Remove skill
  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  // Form steps
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile submitted:', { ...formData, profileImage, galleryImages });
    // Add your submission logic here (API call, etc.)
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map(step => (
              <div key={step} className="text-center">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center 
                  ${currentStep >= step ? 'bg-blue-600' : 'bg-zinc-800'}`}>
                  {step}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-zinc-800 h-1 rounded-full">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-xl p-6 md:p-8 shadow-lg">
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User size={24} /> Basic Information
              </h2>
              
              {/* Profile Image Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Profile Picture</label>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                        <Camera size={32} className="text-zinc-500" />
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center gap-2 transition"
                  >
                    <Upload size={18} /> Upload
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Basic Info Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stage Name</label>
                  <input
                    type="text"
                    name="stageName"
                    value={formData.stageName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="16"
                    max="99"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    min="100"
                    max="250"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about yourself and your experience..."
                ></textarea>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                >
                  Next: Skills & Experience
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Film size={24} /> Skills & Experience
              </h2>

              {/* Skills */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Skills (Press Enter to add)</label>
                <input
                  type="text"
                  onKeyDown={handleSkillKeyDown}
                  placeholder="e.g. Acting, Dancing, Singing"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-blue-900/50 px-3 py-1 rounded-full text-sm">
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="ml-2 text-blue-300 hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Languages</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Amharic', 'English', 'Oromo', 'Tigrinya', 'French', 'Arabic'].map(lang => (
                    <label key={lang} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => {
                          setFormData(prev => ({
                            ...prev,
                            languages: prev.languages.includes(lang)
                              ? prev.languages.filter(l => l !== lang)
                              : [...prev.languages, lang]
                          }));
                        }}
                        className="h-4 w-4 text-blue-600 bg-zinc-800 border-zinc-700 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your experience level</option>
                  <option value="Beginner">Beginner (0-2 years)</option>
                  <option value="Intermediate">Intermediate (2-5 years)</option>
                  <option value="Professional">Professional (5+ years)</option>
                </select>
              </div>

              {/* Gallery */}
              <div>
                <label className="block text-sm font-medium mb-2">Portfolio Gallery (Max 6 images)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-700">
                      <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="absolute top-2 right-2 bg-zinc-900/80 rounded-full p-1 hover:bg-red-600 transition"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  {galleryImages.length < 6 && (
                    <label className="aspect-square flex items-center justify-center border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input
                        type="file"
                        onChange={handleGalleryUpload}
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                      <div className="text-center p-4">
                        <Upload size={24} className="mx-auto mb-2 text-zinc-500" />
                        <p className="text-sm text-zinc-400">Upload photos</p>
                      </div>
                    </label>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition" >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                >
                  Next: Review & Submit
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} /> Review Your Profile
              </h2>

              <div className="bg-zinc-800 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 mx-auto md:mx-0">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                        <User size={32} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{formData.name}</h3>
                    {formData.stageName && <p className="text-blue-400 mb-2">"{formData.stageName}"</p>}
                    <p className="text-gray-300">{formData.gender} {formData.age} years {formData.height}cm</p>
                    <p className="text-gray-300">{formData.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-400">About</h4>
                    <p className="text-white">{formData.bio || "Not provided"}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">Skills</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.skills.length > 0 ? (
                        formData.skills.map((skill, index) => (
                          <span key={index} className="bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500">No skills added</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">Languages</h4>
                    <p>{formData.languages.join(', ') || "Not specified"}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">Experience</h4>
                    <p>{formData.experience || "Not specified"}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">Portfolio</h4>
                    {galleryImages.length > 0 ? (
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {galleryImages.map((img, index) => (
                          <img key={index} src={img} alt={`Gallery ${index}`} className="rounded aspect-square object-cover" />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No portfolio images added</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium flex items-center gap-2 transition"
                >
                  <Save size={18} /> Complete Profile
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileCreation;