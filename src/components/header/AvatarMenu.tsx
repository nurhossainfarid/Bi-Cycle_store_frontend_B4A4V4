"use client";

import * as React from "react";
import { LogOut, Settings, User, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { Command, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { logout } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export function AvatarMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const userOptions = [
    {
      value: "profile",
      label: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      value: "settings",
      label: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[50px] h-[50px] rounded-full p-0"
        >
          <Avatar>
            <AvatarImage src="/path-to-user-image.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options available.</CommandEmpty>
            <CommandGroup>
              {userOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    // Handle navigation or actions here
                  }}
                >
                  {option.icon}
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              <CommandItem key="logout" value="logout" onSelect={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
                <Check
                  className={cn(
                    "ml-auto",
                    value === "logout" ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
