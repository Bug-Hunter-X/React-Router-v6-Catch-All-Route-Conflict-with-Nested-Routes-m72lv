# React Router v6 Catch-All Route Conflict with Nested Routes

This repository demonstrates a subtle bug in React Router v6 related to the interaction between catch-all routes (`/*`) and nested routes.  The catch-all route unintentionally intercepts requests intended for nested routes, resulting in incorrect component rendering.

## Problem Description

When using a catch-all route (`/*`) in conjunction with nested routes, the catch-all route can prematurely capture requests that should be handled by the nested routes.  This typically occurs when a nested route segment contains a pattern that matches the catch-all. 

## Solution

The solution involves carefully ordering routes and using more specific route paths to avoid conflicts.  The provided `AppSolution.js` file demonstrates the correct approach. The key is prioritizing more specific routes before the catch-all. 