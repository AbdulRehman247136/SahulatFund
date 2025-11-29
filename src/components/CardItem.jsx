'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export function CardItem({
  imageUrl,
  title,
  description,
  raised,
  goal,
  donors,
  daysLeft,
}) {
  const percentage = Math.min((raised / goal) * 100, 100); // Cap at 100%

  return (
    <Card className="overflow-hidden shadow-lg max-w-md mx-auto rounded-2xl">
      {/* Image + Verified Badge */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-85 object-cover block" // ← block + full width/height
        />

        <Badge className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified
          </span>
        </Badge>
      </div>

      {/* Header */}
      <CardHeader className="pt-4">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
      </CardHeader>

      {/* Body */}
      <CardContent className="space-y-2 pb-5">
        <p className="text-[0.75rem] text-gray-600 line-clamp-3">{description}</p>

        {/* Amount */}
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-[var(--color-primary)]">
            Rs{raised.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">
            of Rs{goal.toLocaleString()}
          </span>
        </div>

        {/* Progress Bar - Fixed */}
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-secondary)]">
          <div
            className="h-full bg-[var(--color-primary)] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {/* OR use shadcn Progress (recommended) */}
        {/* <Progress value={percentage} className="h-2" /> */}

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {donors} donors
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {daysLeft} days left
          </span>
        </div>

        {/* CTA */}
        <Link href="/campaigndetails">
        <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-medium">
          <Heart className="w-4 h-4 mr-2" />
          
          Donate Now
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
}