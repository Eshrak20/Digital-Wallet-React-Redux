import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Eye, EyeOff, Edit3, Save, X } from "lucide-react";
import type { MyProfileUiProps } from "@/types/MyProfileUiProps.type";


const MyProfileUi: React.FC<MyProfileUiProps> = ({
  myProfile,
  isEditing,
  isUpdating,
  showPassword,
  profileInfo,
  formFields,
  initial,
  name,
  email,
  role,
  is_verified,
  onEditClick,
  onSubmit,
  onChange,
  onTogglePasswordVisibility,
  onCancelEdit,
}) => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-background to-muted/30 text-foreground transition-all duration-300">
      <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm shadow-2xl border border-border/50 rounded-2xl overflow-hidden">
        <CardHeader className="flex flex-col items-center gap-5 p-8 border-b border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
          <Avatar className="h-28 w-28 border-4 border-primary/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/40">
            <AvatarImage src={myProfile.avatarUrl} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-2xl font-semibold">
              {initial}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center space-y-2 text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {name}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              {email}
            </CardDescription>
            <Badge className="bg-primary/90 text-primary-foreground mt-3 hover:bg-primary text-sm py-1 px-3 rounded-full">
              {role}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-6">
          {isEditing ? (
            <form onSubmit={onSubmit} className="space-y-5">
              {formFields.map((field) => (
                <div key={field.name} className="relative">
                  <Input
                    name={field.name}
                    value={field.value}
                    onChange={onChange}
                    placeholder={field.placeholder}
                    type={field.type}
                    className="bg-input/50 text-foreground pr-10 py-5 rounded-lg border-border/50 focus-visible:ring-primary/50"
                  />
                  {field.hasEye && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                      onClick={() => onTogglePasswordVisibility(field.name as keyof typeof showPassword)}
                    >
                      {showPassword[field.name as keyof typeof showPassword] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
              ))}
              
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancelEdit}
                  className="border-border/50 hover:text-black dark:text-foreground hover:bg-muted flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Cancel
                  
                </Button>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                >
                  {isUpdating ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {profileInfo.map((info) => (
                  <div key={info.label} className={info.colSpan}>
                    <p className="text-sm text-muted-foreground mb-1.5">{info.label}</p>
                    {info.badge ? (
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`${
                            is_verified ? "bg-green-500/90" : "bg-red-500/90"
                          } text-white`}
                        >
                          {info.value}
                        </Badge>
                        {is_verified ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <Separator className="bg-border/50 my-2" />
              
              <div className="flex justify-end">
                <Button
                  onClick={onEditClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                >
                  <Edit3 className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfileUi;